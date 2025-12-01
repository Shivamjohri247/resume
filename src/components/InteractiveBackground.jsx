import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const GradientShaderMaterial = {
    uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uColor1: { value: new THREE.Color('#111111') },
        uColor2: { value: new THREE.Color('#1a1a1a') },
        uAccent: { value: new THREE.Color('#E4C441') }
    },
    vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    fragmentShader: `
    uniform float uTime;
    uniform vec2 uMouse;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uAccent;
    varying vec2 vUv;

    // Simplex 2D noise
    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
    float snoise(vec2 v){
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
               -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy) );
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
      m = m*m ;
      m = m*m ;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    void main() {
      vec2 uv = vUv;
      
      // Mouse influence
      float dist = distance(uv, uMouse);
      float mouseEffect = smoothstep(0.5, 0.0, dist) * 0.2;
      
      // Flowing noise - Smoother, lower frequency
      float n = snoise(uv * 1.5 + uTime * 0.05);
      float n2 = snoise(uv * 3.0 - uTime * 0.08);
      
      // Mix colors
      vec3 color = mix(uColor1, uColor2, n * 0.5 + 0.5);
      
      // Add accent based on noise and mouse
      color = mix(color, uAccent, (n2 * 0.1 + mouseEffect) * 0.2);
      
      gl_FragColor = vec4(color, 1.0);
    }
  `
};

const BackgroundMesh = () => {
    const mesh = useRef();
    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        uColor1: { value: new THREE.Color('#0a0a0a') },
        uColor2: { value: new THREE.Color('#1a1a1a') },
        uAccent: { value: new THREE.Color('#E4C441') }
    }), []);

    useFrame((state) => {
        const { clock, pointer } = state;
        if (mesh.current) {
            mesh.current.material.uniforms.uTime.value = clock.getElapsedTime();
            // Smoothly interpolate mouse position
            mesh.current.material.uniforms.uMouse.value.lerp(
                new THREE.Vector2((pointer.x + 1) / 2, (pointer.y + 1) / 2),
                0.1
            );
        }
    });

    return (
        <mesh ref={mesh} scale={[2, 2, 1]}>
            <planeGeometry args={[1, 1]} />
            <shaderMaterial
                args={[GradientShaderMaterial]}
                uniforms={uniforms}
            />
        </mesh>
    );
};

const InteractiveBackground = () => {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                camera={{ position: [0, 0, 1] }}
                dpr={[1, 2]}
                gl={{ antialias: false, alpha: false }}
            >
                <BackgroundMesh />
            </Canvas>
        </div>
    );
};

export default InteractiveBackground;
