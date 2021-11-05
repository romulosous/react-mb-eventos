import { Link } from "react-router-dom"
import "./header.css"


export default function Header() {
  return (
    <header>
      <div className="logo-header">
        <Link className="logo" to="/">MB Event</Link>
        <input className="search" type="text" placeholder="Buscar eventos" />
      </div>
      <div className="navbar-header">
        <Link>Criar um evento</Link>
        <Link>romulo@gmail.com</Link>
      </div>
    </header>
  )
}