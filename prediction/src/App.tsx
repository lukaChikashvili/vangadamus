import { Canvas } from "@react-three/fiber"
import Scene from "./components/Scene"
import Lights from "./components/Lights"



function App() {


  return (
    <>
 <Canvas>
    <Scene />
    <Lights />

 </Canvas>


 </>
  )
}

export default App
