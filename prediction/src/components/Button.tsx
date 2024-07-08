


const Button = ({text, onClick, icon}: {text: string, onClick: () => void, icon: any}) => {
  return (
    <div>
      <button onClick={onClick} className="btn">{icon}{text}</button>
    </div>
  )
}

export default Button
