import { useState, useContext } from "react";
import { Link } from 'react-router-dom'
import { AuthContext } from "../../contexts/auth"


function SignUp() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const { signUp, loadingAuth } = useContext(AuthContext)

  function handleSubmit(e) {
    e.preventDefault();

    if (name !== "" && email !== "" && password !== "") {
      signUp(email, password, name)
    }
  }

  return (
    <div className="container">
      <div className="login">
        <form onSubmit={handleSubmit}>
          <Link to="/">MB Events</Link>
          <h1>Criar uma Conta</h1>
          <input type="text" placeholder="Seu nome" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="email@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="**********" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">{loadingAuth ? "Carregando..." : "Cadastrar"}</button>
        </form>

        <Link to="/login">Já possui uma conta? Entre</Link>
      </div>

      <div className="login-area">
      </div>
    </div>
  );
}

export default SignUp;
