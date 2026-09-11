import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, useGLTF } from '@react-three/drei'
import React, { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'


class ModelErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch() {}
  render() {
    if (this.state.hasError) return this.props.fallback
    return this.props.children
  }
}

function FallbackModel() {
  const geo = useMemo(() => new THREE.BoxGeometry(1, 1, 1), [])
  const mat = useMemo(
    () => new THREE.MeshStandardMaterial({ metalness: 0.15, roughness: 0.65 }),
    []
  )

  // IMPORTANT: no continuous rotation here (must start facing front)
  return (
    <group position={[0, -0.2, 0]}>
      <mesh geometry={geo} material={mat} position={[-1.2, 0.0, 0]} scale={[0.9, 0.9, 0.9]} />
      <mesh geometry={geo} material={mat} position={[0.0, 0.0, 0]} scale={[1.1, 0.6, 0.8]} />
      <mesh geometry={geo} material={mat} position={[1.1, -0.1, 0]} scale={[0.6, 1.0, 0.6]} />
    </group>
  )
}

function GLBModel({ url }) {
  const gltf = useGLTF(url)
  return <primitive object={gltf.scene} />
}

function ModelSwitch({ url }) {
  if (!url || !String(url).toLowerCase().endsWith('.glb')) return <FallbackModel />
  return <GLBModel url={url} />
}


function ParallaxRig({ mouseX, hoverPath, hoverOffsetX, children }) {
  const rig = useRef(null)
  const motion = useRef({ enabled: false, time: 0 })

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const pointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => {
      motion.current.enabled = !reduced.matches && pointer.matches && !document.hidden
    }
    update()
    reduced.addEventListener('change', update)
    pointer.addEventListener('change', update)
    document.addEventListener('visibilitychange', update)
    return () => {
      reduced.removeEventListener('change', update)
      pointer.removeEventListener('change', update)
      document.removeEventListener('visibilitychange', update)
    }
  }, [])

  useFrame(({ viewport, camera }, delta) => {
    if (!rig.current) return
    const { enabled } = motion.current
    const dt = Math.min(delta, 0.05)
    if (enabled) motion.current.time += dt
    // Convert visual pixels at the model's plane to world units.
    const unitsPerPixel = 1 / viewport.getCurrentViewport(camera, [0, -1.52, 0]).factor
    const px = enabled ? THREE.MathUtils.clamp(mouseX.current ?? 0, -1, 1) : 0
    const phase = motion.current.time * Math.PI * 2 / 7
    const breathe = enabled ? Math.sin(phase) : 0
    const hoverYaw = enabled ? ({ '/work': -1.5, '/about': 1.5, '/contact': -1 })[hoverPath] ?? 0 : 0
    const hoverLift = enabled && hoverPath === '/playground' ? 1 : 0
    const targetX = enabled ? (hoverOffsetX ?? px * 12) * unitsPerPixel : 0
    // Absolute targets: base stays in the child group; nothing accumulates.
    const blend = 1 - Math.exp(-3 * dt)
    rig.current.position.x = THREE.MathUtils.lerp(rig.current.position.x, targetX, blend)
    rig.current.position.y = THREE.MathUtils.lerp(rig.current.position.y, (breathe * 3 + hoverLift) * unitsPerPixel, blend)
    rig.current.rotation.x = THREE.MathUtils.lerp(rig.current.rotation.x, THREE.MathUtils.degToRad(breathe * 0.5), blend)
    rig.current.rotation.y = THREE.MathUtils.lerp(rig.current.rotation.y, THREE.MathUtils.degToRad(px * 2 + breathe * 0.75 + hoverYaw), blend)
    rig.current.rotation.z = 0
  })

  return <group ref={rig}>{children}</group>
}


export default function Hero3D({ modelUrl = '', mouseX, hoverPath, hoverOffsetX }) {
  return (
    <div className="home-3d-wrap" aria-hidden="true">
      <Canvas camera={{ position: [0, 0.8, 3.7], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[3, 4, 2]} intensity={1.2} />
        <directionalLight position={[-1, 1, 4]} intensity={0.6} />
        <ParallaxRig mouseX={mouseX} hoverPath={hoverPath} hoverOffsetX={hoverOffsetX}>
          <group scale={0.85} position={[0, -1.52, 0]} rotation={[0, 0, 0]}>
            <mesh position={[0, -0.04, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[3.6, 2.4]} />
              <shaderMaterial
                transparent
                depthWrite={false}
                toneMapped={false}
                vertexShader={`
                  varying vec2 shadowUv;
                  void main() {
                    shadowUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                  }
                `}
                fragmentShader={`
                  varying vec2 shadowUv;
                  void main() {
                    float radius = length((shadowUv - 0.5) * 2.0);
                    float softness = 1.0 - smoothstep(0.0, 1.0, radius);
                    gl_FragColor = vec4(0.08, 0.10, 0.12, softness * softness * 0.10);
                  }
                `}
              />
            </mesh>
            <ModelErrorBoundary fallback={<FallbackModel />}>
              <ModelSwitch url={modelUrl} />
            </ModelErrorBoundary>
          </group>
        </ParallaxRig>
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
