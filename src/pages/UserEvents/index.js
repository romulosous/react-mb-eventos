import { useState } from "react"
import "./events.css"
import Title from "../../components/Title"
import SideBar from "../../components/SideBar"
// import Header from "../../components/Header"
import { FiPlus } from "react-icons/fi"
import { Link } from "react-router-dom"

export default function UserEvents() {
  const [events, setEvents] = useState([])
  return (
    <div>
      <SideBar />
      {/* <Header /> */}
      <div className="content">
        <Title name="Meus Eventos">
        </Title>

        {events.length === 0 ? (
          <div className="container-dashboard user-events">
            <span>Nenhum evento criado...</span>

            <Link to="/new" className="new">
              <FiPlus size={25} color="#FFF" />
              Novo evento
            </Link>
          </div>
        ) : (
          <>
            <Link to="/new" className="new">
              <FiPlus size={25} color="#FFF" />
              Novo evento
            </Link>
          </>
        )}


      </div>
    </div>
  )
}