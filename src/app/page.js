
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-4 items-center">

        <h1 className="text-center capitalize text-5xl mb-8">
          Bem vindo <span className="normal-case">ao</span> <span className="text-sky-300">OffBook</span>
        </h1>

        <form method="POST"  className="flex gap-4 flex-col my-8 w-80 border-2 rounded p-4">
          <div className="flex flex-col gap-4">

            <div className="flex flex-col gap-2">
              <label htmlFor="usuario">Usuário:</label>
              <input name="usuario" id="usuario" type="text" className="rounded text-black"/>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="senha">Senha:</label>
              <input name="senha" id="senha" type="password" className="rounded text-black"/>
            </div>

            <button className="color-white border-gray-500 w-32 self-center border-2 rounded">Entrar</button>

          </div>
        </form>
        <div className="text-center flex flex-col gap-2">
        <p>Esqueceu a senha ? <i>Clique aqui</i></p>
        <p>ou</p>
        <p>Não tem conta? <i>Cadastre-se</i></p>
        </div>
      </div>
    </main>
  )
}
