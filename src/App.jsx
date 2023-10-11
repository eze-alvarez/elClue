import { useState } from 'react'
import './App.css'
import Tema from './components/Tema'
import TodoForm from './components/TodoForm'
import data from './data.json'
function App () {
  const [selected, setSelected] = useState('All')
  const [start, setStart] = useState(false)

  const optionChoice = (option) => {
    setSelected(option)
  }

  const newGame = () => {
    setStart(true)
    setTimeout(() => setStart(false), 1000)
  }

  const Personajes = data.Personajes
  const Lugares = data.Lugares
  const Objetos = data.Objetos

  return (
    <>
      <div className='container'>
        <header>
          <h1>El Clue</h1>
        </header>
        <TodoForm
          optionChoice={optionChoice}
        />
        <Tema
          titulo='PERSONAJES'
          tema={Personajes}
          selected={selected}
          guardar='personajes'
          start={start}
        />
        <Tema
          titulo='LUGARES'
          tema={Lugares}
          selected={selected}
          guardar='lugares'
          start={start}
        />
        <Tema
          titulo='OBJETOS'
          tema={Objetos}
          selected={selected}
          guardar='objetos'
          start={start}
        />
        <button
          onClick={newGame}
          className='new-Game'
        >
          Volver a Jugar
        </button>
      </div>
    </>
  )
}

export default App
