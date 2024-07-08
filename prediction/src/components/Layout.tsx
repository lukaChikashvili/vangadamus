import { Eye, Play } from "lucide-react"
import Button from "./Button"


const Layout = ({onStart, changeCamera}: {onStart: () => void, changeCamera: () => void}) => {
  return (
    <div className="buttons">
      <Button onClick={onStart} icon = {<Play />}  text = "start"   />
      <Button onClick={changeCamera} icon = {<Eye />} text = "view"  />
    </div>
  )
}

export default Layout
