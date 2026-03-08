import Navbar from "./components/Navbar";
import Mercury from "./components/Mercury";
import Venus from "./components/Venus";
import Earth from "./components/Earth";
import Mars from "./components/Mars";
import Jupiter from "./components/Jupiter";
import Saturn from "./components/Saturn";
import Uranus from "./components/Uranus";
import Neptune from "./components/Neptune";
import "./App.css";
import { useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import Planet from "./components/Planet";
import { TextureLoader } from "three";
import MercuryTexture from "./assets/MercuryTexture.jpg";
import VenusTexture from "./assets/VenusTexture.jpg";
import EarthTexture from "./assets/EarthTexture.jpg";
import MarsTexture from "./assets/MarsTexture.jpg";
import JupiterTexture from "./assets/JupiterTexture.jpg";
import SaturnTexture from "./assets/SaturnTexture.jpg";
import UranusTexture from "./assets/UranusTexture.jpg";
import NeptuneTexture from "./assets/NeptuneTexture.jpg";
import { OrbitControls } from "@react-three/drei";

function App() {
  const [currentPage, setPage] = useState("Earth");
  const [isUniformSize, setUniformSize] = useState(false);

  const displayPlanetInfo = () => {
    switch (currentPage) {
      case "Mercury":
        return <Mercury />;
      case "Venus":
        return <Venus />;
      case "Earth":
        return <Earth />;
      case "Mars":
        return <Mars />;
      case "Jupiter":
        return <Jupiter />;
      case "Saturn":
        return <Saturn />;
      case "Uranus":
        return <Uranus />;
      case "Neptune":
        return <Neptune />;
    }
  };

  const textures = {
    Mercury: useLoader(TextureLoader, MercuryTexture),
    Venus:   useLoader(TextureLoader, VenusTexture),
    Earth:   useLoader(TextureLoader, EarthTexture),
    Mars:    useLoader(TextureLoader, MarsTexture),
    Jupiter: useLoader(TextureLoader, JupiterTexture),
    Saturn:  useLoader(TextureLoader, SaturnTexture),
    Uranus:  useLoader(TextureLoader, UranusTexture),
    Neptune: useLoader(TextureLoader, NeptuneTexture),
  }

  return (
    <div className="w-screen h-screen">
      <Navbar currentPage={currentPage} setPage={setPage} isUniformSize={isUniformSize} setUniformSize={setUniformSize}/>
      <main className="w-screen h-screen absolute ">
        <div id="canvas-container" className="h-full w-full absolute">
          <Canvas>
            <ambientLight intensity={0.3} />
            <directionalLight intensity={5} position={[1, 1, 0]} color="white" />
            <Planet currentPage={currentPage} isUniformSize={isUniformSize} texture={textures[currentPage]}/>
            <OrbitControls zoomSpeed={.5} enableRotate={true} minDistance={(isUniformSize ? 4: 1)} maxDistance={(isUniformSize ? 10: 5)} enableZoom={true} enablePan={false}/>
          </Canvas>
        </div>
        <div className="mt-30">
          {displayPlanetInfo()} 
        </div>
      </main>
    </div>
  );
}

export default App;
