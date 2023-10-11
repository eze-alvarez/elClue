import { useState, useEffect } from 'react'
import save from '../logic/save'
import InputsItem from './InputsItem'
export default function TodoItem ({ todo, onCompleted, start }) {
  const tipPista = `observation${todo.id}`

  const classname = todo.completed ? 'item item-completed' : 'item'
  const [pista, setPista] = useState(() => {
    const localPista = window.localStorage.getItem(tipPista)
    return localPista
      ? JSON.parse(localPista)
      : ''
  })

  const onChangeHandler = (e) => {
    const limit = 10
    setPista(e.currentTarget.value.slice(0, limit))
  }

  useEffect(() => {
    save(tipPista, pista)
  }, [pista])

  useEffect(() => {
    if (start) {
      window.localStorage.removeItem(tipPista)
      setPista('')
    }
  }, [start])
  return (
    <li className={classname}>
      <div>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={() => onCompleted(todo.id)}
        />
        <span>{todo.nombre}</span>
      </div>
      <div>
        <input
          type='text'
          className='observations'
          value={pista}
          onChange={onChangeHandler}
        />
        <InputsItem
          name={todo.nombre}
          number={1}
          start={start}
        />
        <InputsItem
          name={todo.nombre}
          number={2}
          start={start}
        />
        <InputsItem
          name={todo.nombre}
          number={3}
          start={start}
        />
      </div>
    </li>
  )
}
