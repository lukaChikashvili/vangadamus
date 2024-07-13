import { useNavigate } from "react-router-dom"


const StartPage = () => {
  let navigate = useNavigate();


  return (
    <div className="start">
        <h1 className="title">Vangadamus</h1>

        <button className="enter" onClick={() => navigate('/rules')}>
           Enter the vangadamus 
        </button>
    </div>
  )
}

export default StartPage
