import { useNavigate } from "react-router-dom"


const Rules = () => {
    let navigate = useNavigate();
  return (
    <div className="rules">
  
      <h2>Close your eyes and focus your mind on the specific question you want answered. roll the rock on the vangadamus  then open your eyes and see which number you are holding your finger on. 
        Then, under this number, read the answer to your question or the prediction of when your wish will come true.</h2>

        <button className="enter enter-width" onClick={() => navigate('/canvas')}>Reveal your future</button>
    </div>

   
  )
}

export default Rules
