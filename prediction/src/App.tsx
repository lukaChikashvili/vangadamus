
import { Route, Routes, useNavigate } from "react-router-dom"
import StartPage from "./components/StartPage"
import CanvasPage from "./components/Canvas"
import Rules from "./components/Rules"
import bgmusic from './assets/Classical Cinematic Mystery  Mystical Background Music for Video Projects.mp3'



function App() {
  let navigate = useNavigate();

 
  const handleSound = () => {
    const audio = new Audio(bgmusic);
    audio.play();
     navigate('/rules')
  }

  return (
    <>
 

  <Routes>
    <Route path="/" element = {<StartPage onClick={handleSound} />}/>
    <Route path="/canvas" element = {<CanvasPage />}/>
    <Route path="/rules" element = {<Rules />}/>
  </Routes>


 </>
  )
}

export default App
