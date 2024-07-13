import { useNavigate } from "react-router-dom"
import fortune from '../assets/logo of fortune e9ba06c2-9910-4b85-b0d3-6afe437d986d.png'

const Rules = () => {
    let navigate = useNavigate();
  return (
    <div className="rules ">
<img src= {fortune} className='absolute w-full -z-10' />
  
      <h2 className="text-white w-2/3 text-center  text-xl leading-8 md:text-5xl  md:w-4/5" >Close your eyes and focus your mind on the specific question you want answered. roll the rock on the vangadamus, then open your eyes and see which number your rock landed on. 
        Then, under this number, read the answer to your question or the prediction of when your wish will come true.</h2>

        <button className="enter enter-width" onClick={() => navigate('/canvas')}>Reveal your future</button>
    </div>

   
  )
}

export default Rules
