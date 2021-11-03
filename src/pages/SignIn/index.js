import { useState, useContext } from "react";
import { Link } from 'react-router-dom'

import { AuthContext } from "../../contexts/auth";
import "./signin.css"


function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, loadingAuth } = useContext(AuthContext)

  function handleSubmit(e) {
    e.preventDefault();
    if (email !== "" && password !== "") {
      signIn(email, password)
    }

  }

  return (
    <div className="container">
      <div className="login">
        <form onSubmit={handleSubmit}>
          <Link to="/">MB Events</Link>
          <h1>Log in</h1>
          <input type="text" placeholder="email@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="**********" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">{loadingAuth ? "Entrando..." : "Acessar"}</button>
        </form>

        <Link to="/register">Criar uma conta</Link>
      </div>

      <div className="login-area">
      </div>
    </div>
  );
}

export default SignIn;
