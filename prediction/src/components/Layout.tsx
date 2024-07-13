import { Eye, Play } from "lucide-react"
import Button from "./Button"


const Layout = ({onStart, changeCamera}: {onStart: () => void, changeCamera: () => void}) => {
  return (
    <div className="buttons">
      <Button onClick={onStart} icon = {<Play />}  text = "Roll"   />
      <Button onClick={changeCamera} icon = {<Eye />} text = "View"  />
    </div>
  )
}

export default Layout
