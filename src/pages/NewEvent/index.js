import SideBar from "../../components/SideBar"
import Title from "../../components/Title"
import "./new-event.css"

export default function New() {

  function handleRegister(e) {
    e.preventDefault()
    alert("Evento criado com sucesso!!!")
  }

  return (
    <div>
      <SideBar />
      <div className="content">
        <Title name="Novo evento" />

        <div className="container">
          <form className="form form-profile" onSubmit={handleRegister}>
            <label>Cliente</label>
            <select>
              <option>
                Romulo
              </option>
            </select>

            <button type="submit">Salvar</button>
          </form>
        </div>
      </div>
    </div>
  )
}