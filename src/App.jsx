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
import { Canvas } from "@react-three/fiber";
import Planet from "./components/Planet";
import UniformSizeButton from './components/UniformSizeButton'

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

  return (
    <div className="w-screen h-screen">
      <Navbar currentPage={currentPage} setPage={setPage}/>
      <UniformSizeButton isUniformSize={isUniformSize} setUniformSize={setUniformSize}/>
      <main className="relative w-full h-full">
        <div id="info-container" className="absolute">
          {displayPlanetInfo()}
        </div>
        <div id="canvas-container" className="h-full">
          <Canvas>
            <ambientLight intensity={0.3} />
            <directionalLight intensity={5} position={[1, 1, 0]} color="white" />
            <Planet currentPage={currentPage}/>
          </Canvas>
        </div>
      </main>
    </div>
  );
}

export default App;
