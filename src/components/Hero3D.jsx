import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, useGLTF } from '@react-three/drei'
import React, { useMemo, useRef } from 'react'
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

function ParallaxRig({ mouseX, children }) {
  const rig = useRef(null)

  // limits: move sideways + rotate Y only, always relative to cursor (no drift)
  const MAX_POS_X = 0.55  
  const MAX_ROT_Y = 0.55

  useFrame(() => {
    if (!rig.current) return

    const px = THREE.MathUtils.clamp(mouseX.current ?? 0, -1, 1)

    const targetX = px * MAX_POS_X
    const targetRotY = px * MAX_ROT_Y

    rig.current.position.x = THREE.MathUtils.lerp(rig.current.position.x, targetX, 0.14)
    rig.current.rotation.y = THREE.MathUtils.lerp(rig.current.rotation.y, targetRotY, 0.14)

    // lock other axes so it stays "front" and only yaws sideways
    rig.current.rotation.x = 0
    rig.current.rotation.z = 0
  })

  return <group ref={rig}>{children}</group>
}

function GLBModel({ url }) {
  const gltf = useGLTF(url)
  return <primitive object={gltf.scene} />
}

export default function Hero3D({ modelUrl = '', mouseX }) {
  return (
    <div className="home-3d-wrap" aria-hidden="true">
      <Canvas camera={{ position: [0, 0.8, 3.7], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 4, 2]} intensity={1.2} />
        <ParallaxRig mouseX={mouseX}>
          <group scale={0.85} position={[0, -0.6, 0]} rotation={[0, 0, 0]}>
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

function ModelSwitch({ url }) {
  if (!url || !String(url).toLowerCase().endsWith('.glb')) return <FallbackModel />
  return <GLBModel url={url} />
}
