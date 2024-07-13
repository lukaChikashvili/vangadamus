import fortune from '../assets/logo of fortune e9ba06c2-9910-4b85-b0d3-6afe437d986d.png'
import { motion } from 'framer-motion'

const StartPage = ({onClick}: {onClick: () => void}) => {
 


  return (
    <div className="start">
      <img src= {fortune} className='absolute w-full -z-10' />
        <motion.h1 initial = {{opacity: 0, translateY: 10}} 
                   animate = {{opacity: 1, translateY: 0}}
                   transition={{type: 'spring', duration: 1, delay: 0.6}}
         className="title text-5xl md:text-9xl ">Vangadamus</motion.h1>
        
        <motion.button initial = {{opacity: 0, translateY: 10}} 
                   animate = {{opacity: 1, translateY: 0}}
                   transition={{type: 'spring', duration: 1, delay: 0.8}}
        className="enter" onClick={onClick}>
           Enter the vangadamus 
        </motion.button>
    </div>
  )
}

export default StartPage
