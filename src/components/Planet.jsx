import { Canvas, useLoader, useThree, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useRef } from "react";
import MercuryTexture from "../assets/MercuryTexture.jpg";
import VenusTexture from "../assets/VenusTexture.jpg";
import EarthTexture from "../assets/EarthTexture.jpg";
import MarsTexture from "../assets/MarsTexture.jpg";
import JupiterTexture from "../assets/JupiterTexture.jpg";
import SaturnTexture from "../assets/SaturnTexture.jpg";
import UranusTexture from "../assets/UranusTexture.jpg";
import NeptuneTexture from "../assets/NeptuneTexture.jpg";
import { mx_bilerp_0 } from "three/src/nodes/materialx/lib/mx_noise.js";

const visualData = {
  Mercury: {
    radiusRatio: 0.03,   // smallest planet
    spinSpeed: 1.6,      // fast rotation
    texture: MercuryTexture,
  },
  Venus: {
    radiusRatio: 0.075,  // slightly bigger
    spinSpeed: 0.4,      // slow rotation
    texture: VenusTexture,
  },
  Earth: {
    radiusRatio: 0.08,
    spinSpeed: 1,        // standard
    texture: EarthTexture,
  },
  Mars: {
    radiusRatio: 0.06,
    spinSpeed: 0.97,
    texture: MarsTexture,
  },
  Jupiter: {
    radiusRatio: 0.18,   // huge
    spinSpeed: 2,        // fast
    texture: JupiterTexture,
  },
  Saturn: {
    radiusRatio: 0.15,
    spinSpeed: 1.7,
    texture: SaturnTexture,
  },
  Uranus: {
    radiusRatio: 0.11,
    spinSpeed: 1.2,
    texture: UranusTexture,
  },
  Neptune: {
    radiusRatio: 0.11,
    spinSpeed: 1.3,
    texture: NeptuneTexture,
  },
};

export default function Planet({currentPage, isUniformSize}) {
    const { viewport } = useThree();
    const radius = isUniformSize ? 0.25: Math.min(viewport.width * visualData[currentPage].radiusRatio, viewport.width/ 4);
    const meshRef = useRef()

    useFrame((state, delta) => {
      if (meshRef.current) {
        meshRef.current.rotation.y += visualData[currentPage].spinSpeed * delta;
      }
    })

    return (
      <mesh ref={meshRef}>
        <sphereGeometry args={[radius, 100, 100]} />
        <meshStandardMaterial map={useLoader(TextureLoader, visualData[currentPage].texture)}/>
      </mesh>
    );
}
