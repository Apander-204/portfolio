import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

function Model({ modelPath }: { modelPath: string }) {
    const { scene } = useGLTF(modelPath)
    return <primitive object={scene} />
}

const ReactModelViewer = () => {
    const modelPath = "../public/models/react_logo.glb";
  
    return (
        <div style={{ width: 450, height: 450}}>
            <Canvas camera={{ position: [0, 0, 5], fov: 70 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />

                <Suspense fallback={null}>
                    <Model modelPath={modelPath} />
                    <OrbitControls />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default ReactModelViewer;