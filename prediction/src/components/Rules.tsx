import { useNavigate } from "react-router-dom"
import fortune from '../assets/logo of fortune e9ba06c2-9910-4b85-b0d3-6afe437d986d.png'
import { motion } from 'framer-motion'
const Rules = () => {
    let navigate = useNavigate();
  return (
    <div className="rules ">
<img src= {fortune} className='absolute w-full -z-10' />
  
      <motion.h2 initial = {{opacity: 0, translateY: 10}} 
                   animate = {{opacity: 1, translateY: 0}}
                   transition={{type: 'spring', duration: 1, delay: 0.6}}
      className="text-white w-2/3 text-center  text-xl leading-8 md:text-5xl  md:w-4/5" >Close your eyes and focus your mind on the specific question you want answered. roll the rock on the vangadamus, then open your eyes and see which number your rock landed on. 
        Then, under this number, read the answer to your question or the prediction of when your wish will come true.</motion.h2>

        <motion.button initial = {{opacity: 0, translateY: 10}} 
                   animate = {{opacity: 1, translateY: 0}}
                   transition={{type: 'spring', duration: 1, delay: 0.8}}className="enter enter-width" onClick={() => navigate('/canvas')}>Reveal your future</motion.button>
    </div>

   
  )
}

export default Rules
