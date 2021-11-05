import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"

import SideBar from "../../components/SideBar"

export default function Dashboard() {
  const { signOut } = useContext(AuthContext)
  return (
    <div>
      <SideBar />
      <h1>PAGINA DASHBOARD</h1>
      <button onClick={() => signOut()} >Fazer logout</button>
    </div>
  )
}