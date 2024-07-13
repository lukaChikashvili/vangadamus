
import { Route, Routes, useNavigate } from "react-router-dom"
import StartPage from "./components/StartPage"
import CanvasPage from "./components/CanvasPage"
import Rules from "./components/Rules"
import bgmusic from './assets/Classical Cinematic Mystery  Mystical Background Music for Video Projects.mp3'




function App() {
  let navigate = useNavigate();


  const audio = new Audio(bgmusic);
  const handleSound = () => {
   
    audio.play();
     navigate('/rules');

  

   
  }

  const quit = () => {
    navigate('/')
    audio.pause();
  }



  return (
    <>
 

  <Routes>
    <Route path="/" element = {<StartPage onClick={handleSound} />}/>
    <Route path="/canvas" element = {<CanvasPage stopSound={quit} />}/>
    <Route path="/rules" element = {<Rules />}/>
  </Routes>


 </>
  )
}

export default App
