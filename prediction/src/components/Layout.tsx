import { Eye, LogOut, Play } from "lucide-react"
import Button from "./Button"


const Layout = ({onStart, changeCamera, logout}: {onStart: () => void, changeCamera: () => void, logout: () => void}) => {
  return (
    <div className="buttons ">
      <Button onClick={onStart} icon = {<Play />}  text = "Roll"   />
      <Button onClick={changeCamera} icon = {<Eye />} text = "View"  />
      <Button onClick={logout} icon = {<LogOut />} text = "Quit"  />
    </div>
  )
}

export default Layout
