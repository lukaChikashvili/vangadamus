import { Canvas } from "@react-three/fiber"
import Scene from "./Scene"
import Lights from "./Lights"


const CanvasPage = ({stopSound}: {stopSound: any}) => {
  return (
    <>
      <Canvas>
    <Scene quit={stopSound}/>
    <Lights />

 </Canvas>
    </>
  )
}

export default CanvasPage
