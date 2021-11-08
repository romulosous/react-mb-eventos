import { useState } from "react"
import "./events.css"
import Title from "../../components/Title"
import SideBar from "../../components/SideBar"
// import Header from "../../components/Header"
import { FiPlus, FiMoreVertical } from "react-icons/fi"
import { Link } from "react-router-dom"

export default function UserEvents() {
  const [events] = useState([1])
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

            <table>
              <thead>
                <th scope="col">Evento</th>
                <th scope="col">Vendidos</th>
                <th scope="col">Bruto</th>
                <th scope="col">Estado</th>
                <th scope="col">#</th>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Evento">Event GO</td>
                  <td data-label="Vendido"> 0/ 20 </td>
                  <td data-label="Bruto">R$0,00</td>
                  <td data-label="Estado"><span className="badge" style={{ backgroundColor: '#5cb85c' }} >À venda</span></td>
                  <td data-label="#">
                    <button className="action" style={{ background: 'none' }}>
                      <FiMoreVertical />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        )}


      </div>
    </div>
  )
}