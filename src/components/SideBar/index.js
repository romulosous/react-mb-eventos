import { useContext } from "react"
import "./sidebar.css"
import { AuthContext } from "../../contexts/auth"
import avatar from "../../assets/avatar.png"

import { Link } from "react-router-dom"

export default function SideBar() {
  const { user, signOut } = useContext(AuthContext)
  return (
    <div className="sidebar">
      <div>
        <img width="80" src={user.avatarUrl === null ? avatar : user.avatarUrl} alt="avatar" />
      </div>

      <Link to="/events">
        Meus Eventos
      </Link>
      <Link to="/registrations">
        Eventos Inscritos
      </Link>

      <Link to="/profile">
        Editar Perfil
      </Link>

      <Link to="/" onClick={() => signOut()} >Deslogar</Link>

    </div>
  )
}