import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense, useRef, type RefObject } from 'react';

function Model({ modelPath }: { modelPath: string }) {
    const { scene } = useGLTF(modelPath);
    const modelRef = useRef();

    useFrame((state, delta) => {
        if (modelRef.current) {
            modelRef.current.rotation.y += delta * 0.5;
        }
    });

    return <primitive ref={modelRef} object={scene} />
}

const ReactModelViewer = () => {
    const modelPath = "../public/models/react_logo.glb";
  
    return (
        <div style={{ width: 450, height: 450}}>
            <Canvas camera={{ position: [0, 0, 5], fov: 70 }}>
                <ambientLight intensity={1} />
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