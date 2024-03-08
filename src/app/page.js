import style from "./styles/header.module.css"

export default function Home() {
  return (
    <div>
      <header className="bg-red-500 text-center">I'm red and centered</header>
      <h1>Hello word</h1>
      <h2 className={style.text}>Hi Word!</h2>
    </div>
  )
}

// ctrl + k +s