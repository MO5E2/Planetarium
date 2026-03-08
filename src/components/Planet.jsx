import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const visualData = {
  Mercury: {radiusRatio: 0.03, spinSpeed: 1.6},
  Venus:   {radiusRatio: 0.075, spinSpeed: 0.4},
  Earth:   {radiusRatio: 0.08, spinSpeed: 1},
  Mars:    {radiusRatio: 0.06, spinSpeed: 0.97},
  Jupiter: {radiusRatio: 0.18, spinSpeed: 2},
  Saturn:  {radiusRatio: 0.15, spinSpeed: 1.7},
  Uranus:  {radiusRatio: 0.11, spinSpeed: 1.2},
  Neptune: {radiusRatio: 0.11, spinSpeed: 1.3},
};

export default function Planet({currentPage, isUniformSize, texture}) {
    const { viewport } = useThree();
    const radius = isUniformSize ? 3: Math.min(viewport.width * visualData[currentPage].radiusRatio, viewport.width/ 4);
    const meshRef = useRef()
    
    useFrame((state, delta) => {
      if (meshRef.current) {
        meshRef.current.rotation.y += (isUniformSize ? .01: visualData[currentPage].spinSpeed) * delta;
      }
    })

    return (
      <mesh ref={meshRef}>
        <sphereGeometry args={[radius, 100, 100]} />
        <meshStandardMaterial map={texture}/>
      </mesh>
    );
}
