
import { Route, Routes } from "react-router-dom"
import StartPage from "./components/StartPage"
import CanvasPage from "./components/Canvas"




function App() {


  return (
    <>
 

  <Routes>
    <Route path="/" element = {<StartPage />}/>
    <Route path="/canvas" element = {<CanvasPage />}/>
  </Routes>


 </>
  )
}

export default App
