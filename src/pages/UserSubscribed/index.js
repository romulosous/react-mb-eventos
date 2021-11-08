import { useState } from "react"
import "./subscribed.css"
import Title from "../../components/Title"
import SideBar from "../../components/SideBar"

export default function UserEvents() {
  const [events] = useState([1])
  return (
    <div>
      <SideBar />
      <div className="content">
        <Title name="Eventos Inscritos" />

        {events.length === 0 ? (
          <div className="container-dashboard user-events">
            <span>Nenhum evento inscrito...</span>
          </div>
        ) : (
          <>
            <table>
              <thead>
                <th scope="col">Evento</th>
                <th scope="col">#</th>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Evento">Event GO</td>
                  <td data-label="#">
                    <button className="cancel">
                      Cancelar
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