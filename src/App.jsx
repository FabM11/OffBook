import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function App(Clique) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Seja bem vindo!</h1>
      <div>

        <form action="POST" method="get">
            
              <label htmlFor="user">Usuário</label>
              <input type="text" name="user" id="user"/>

              <label htmlFor="password">Senha</label>
              <input type="password" name="password" id="password"/>

            <div>
              <button type="submit">Login</button>
            </div>
        </form>

        <p>Esqueceu a senha ? <Link to="#"></Link></p>
      </div>
    </div>
  )
}


function Clique(){
  return(
    <Link>Clique aqui</Link>
  )
}
export default App
