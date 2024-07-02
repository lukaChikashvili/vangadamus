import { Canvas } from "@react-three/fiber"
import Scene from "./components/Scene"
import Lights from "./components/Lights"
import Interface from "./components/Interface"


function App() {


  return (
    <>
 <Canvas>
    <Scene />
    <Lights />

 </Canvas>

 <div className="text">
    <Interface />
 </div>
 </>
  )
}

export default App
