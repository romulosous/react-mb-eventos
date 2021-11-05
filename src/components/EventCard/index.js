// import { Link } from "react-router-dom"
import "./event.css"



export default function EventCard({ cover, title, description, id }) {
  return (
    <div className="event">
      <img src="https://via.placeholder.com/150/92c952" alt={title} />
      <div className="event-card">
        <h1>
          {title}
          {' '}
          {id}
        </h1>
        <p>{description}</p>
        <p className="date">dom, 7 de nov de 2021 às 12:00 -03 + 1 evento mais</p>

      </div>
    </div>
  )
}