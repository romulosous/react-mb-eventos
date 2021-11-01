import { useState } from "react";
import { Link } from 'react-router-dom'


function SignUp() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert("CLICOU")
  }

  return (
    <div className="container">
      <div className="login">
        <form onSubmit={handleSubmit}>
          <Link to="/">MB Events</Link>
          <h1>Criar uma Conta</h1>
          <input type="text" placeholder="Seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
          <input type="text" placeholder="email@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="**********" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Acessar</button>
        </form>

        <Link to="/login">Já possui uma conta? Entre</Link>
      </div>

      <div className="login-area">
      </div>
    </div>
  );
}

export default SignUp;
