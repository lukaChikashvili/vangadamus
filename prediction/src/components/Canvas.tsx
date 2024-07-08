import { Canvas } from "@react-three/fiber"
import Scene from "./Scene"
import Lights from "./Lights"


const CanvasPage = () => {
  return (
    <>
      <Canvas>
    <Scene />
    <Lights />

 </Canvas>
    </>
  )
}

export default CanvasPage
