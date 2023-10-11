import { useEffect, useState } from 'react'
import save from '../logic/save'
export function useFilter (todos, selected, guardar) {
  const [filteredTodos, setFilteredTodos] = useState([])

  const filterHandler = () => {
    switch (selected) {
      case 'completed':
        setFilteredTodos([...todos].filter((item) => item.completed))
        break
      case 'uncompleted':
        setFilteredTodos([...todos].filter((item) => !item.completed))
        break
      default:
        setFilteredTodos(todos)
    }
  }

  useEffect(() => {
    filterHandler()
    save(guardar, todos)
  }, [todos, selected])

  return { filteredTodos }
}
