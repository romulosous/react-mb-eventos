import { useState, useContext } from "react"
import "./profile.css"
import Title from "../../components/Title"
import SideBar from "../../components/SideBar"
import avatar from "../../assets/avatar.png"

import { AuthContext } from "../../contexts/auth"


import { FiUpload } from "react-icons/fi"


export default function Profile() {
  const { user } = useContext(AuthContext)

  const [name, setName] = useState(user && user.name)
  const [email] = useState(user && user.email)

  const [avatarUrl] = useState(user && user.avatarUrl)

  return (
    <div>
      <SideBar />
      <div className="content">
        <Title name="Meu Perfil">
        </Title>

        <div className="container-dashboard">
          <form className="form form-profile">
            <label className="label-avatar">
              <span>
                <FiUpload color="fff" size={25}></FiUpload>
              </span>
              <input type="file" accept="image/*" /> <br />
              {avatarUrl === null ?
                <img src={avatar} width="250" height="250" alt="Foto perfil" />
                :
                <img src={avatarUrl} width="250" height="250" alt="Foto perfil" />
              }
            </label>

            <label>Nome</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <label>Email</label>
            <input type="text" value={email} disabled={true} />
            <button type="submit">Salvar</button>

          </form>
        </div>
      </div>
    </div>
  )
}