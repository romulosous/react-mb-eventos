import "./events.css"
import Title from "../../components/Title"
import SideBar from "../../components/SideBar"
import Header from "../../components/Header"

export default function UserEvents() {
  return (
    <div>
      <SideBar />
      <Header />
      <div className="content">
        <Title name="Meus Eventos">
        </Title>
      </div>
    </div>
  )
}