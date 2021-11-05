import { Link } from "react-router-dom"
import "./header.css"


export default function Header() {
  return (
    <header>
      <div className="search">
        <Link className="logo" to="/">MB Event</Link>
        <input type="text" placeholder="buscar eventos" />
      </div>
      <div className="links-header">
        <Link>Criar um evento</Link>
        <Link>romulo@gmail.com</Link>
      </div>
    </header>
  )
}