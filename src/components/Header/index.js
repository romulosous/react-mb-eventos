import { Link } from "react-router-dom"
import "./header.css"


export default function Header() {
  return (
    <header>
      <Link className="logo" to="/">MB Event</Link>
      <input type="text" placeholder="buscar eventos" />
      <span>Criar um evento</span>
      <span>romulo</span>
    </header>
  )
}