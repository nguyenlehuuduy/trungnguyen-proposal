/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Particles(props: any) {
  const ref = useRef<THREE.Points>(null!);
  const [sphere] = useState(() => {
    const arr = new Float32Array(500 * 3);
    for(let i=0; i<500; i++) {
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = 1.5 + Math.random() * 0.5;
        arr[i*3] = r * Math.sin(phi) * Math.cos(theta);
        arr[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
        arr[i*3+2] = r * Math.cos(phi);
    }
    return arr;
  });

  useFrame((state, delta) => {
    if (ref.current) {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <Points 
      ref={ref} 
      positions={sphere} 
      stride={3} 
      frustumCulled={false} 
      rotation={[0, 0, Math.PI / 4]}
      {...props}
    >
      <PointMaterial
        transparent
        color="#A6192E"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

// Keeping export name simple to avoid breaking imports if any, 
// though we really aren't using this in the new Slides directly, it's good to have as a background option.
export const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <Particles />
      </Canvas>
    </div>
  );
};

// No-op for the old component to prevent errors
export const QuantumComputerScene: React.FC = () => <div />;