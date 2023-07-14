import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-4 items-center">

        <h1 className="text-center capitalize text-5xl mb-8">
          Bem vindo <span className="normal-case">ao</span> <span className="dark:text-sky-300">OffBook</span>
        </h1>

        <form method="POST"  className="flex gap-4 flex-col my-8 w-80 border-2 rounded p-4 border-black dark:border-inherit">
          <div className="flex flex-col gap-4">

            <div className="flex flex-col gap-2">
              <label htmlFor="usuario">Usuário:</label>
              <input name="usuario" id="usuario" type="text" className="rounded text-black"/>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="senha">Senha:</label>
              <input name="senha" id="senha" type="password" className="rounded text-black "/>
            </div>

            <button className="color-white dark:border-inherit border-neutral-800 w-32 self-center border-2 rounded">Entrar</button>

          </div>
        </form>
        <div className="text-center flex flex-col gap-2">
        <p>Esqueceu a senha ? <Link href={"/Forget"} className='italic text-sky-600 hover:text-blue-700'>Clique aqui</Link> </p>
        <p>ou</p>
        <p>Não tem conta? <Link href={"/Cadastro"} className='italic text-sky-600 hover:text-blue-700'>Cadastre-se</Link></p>
        </div>
      </div>
    </main>
  )
}
