import fortune from '../assets/logo of fortune e9ba06c2-9910-4b85-b0d3-6afe437d986d.png'

const StartPage = ({onClick}: {onClick: () => void}) => {
 


  return (
    <div className="start">
      <img src= {fortune} className='absolute w-full -z-10' />
        <h1 className="title text-5xl md:text-9xl ">Vangadamus</h1>
        
        <button className="enter" onClick={onClick}>
           Enter the vangadamus 
        </button>
    </div>
  )
}

export default StartPage
