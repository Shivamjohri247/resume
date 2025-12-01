import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';

const SparkleRig = () => {
    useFrame((state) => {
        state.camera.position.lerp({ x: state.pointer.x * 2, y: state.pointer.y * 2, z: 1 }, 0.05);
    });
    return null;
};

const SparkleEffect = () => {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <SparkleRig />
                <Sparkles count={200} scale={4} size={0.6} speed={0.2} opacity={0.7} color="#E4C441" />
                <Sparkles count={100} scale={4} size={0.4} speed={0.2} opacity={0.5} color="#ffffff" />
            </Canvas>
        </div>
    );
};

export default SparkleEffect;
