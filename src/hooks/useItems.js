import { useEffect, useState } from 'react'

export function useItems (tema, recuperar, start) {
  // const [todos, setTodos] = useState(Personajes)
  const [todos, setTodos] = useState(() => {
    const localTodo = window.localStorage.getItem(recuperar)
    return localTodo
      ? JSON.parse(localTodo)
      : tema
  })

  const onCompleted = (id) => {
    const newTodo = [...todos].map(todo => {
      return todo.id === Number(id) ? { ...todo, completed: !todo.completed } : { ...todo }
    })

    setTodos(newTodo)
  }

  useEffect(() => {
    if (start) {
      window.localStorage.removeItem(recuperar)
      setTodos(tema)
    }
  }, [start])

  return { todos, onCompleted }
}
