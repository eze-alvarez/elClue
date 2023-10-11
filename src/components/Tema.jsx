import { useFilter } from '../hooks/useFilter'
import { useItems } from '../hooks/useItems'
import TodoList from './TodoList'

export default function Tema ({ titulo, tema, selected, guardar, start }) {
  const { todos, onCompleted } = useItems(tema, guardar, start)
  const { filteredTodos } = useFilter(todos, selected, guardar)
  return (
    <div className='areaTema'>
      <h2 className='tituloArea'>{titulo}</h2>
      {
          filteredTodos.length > 0 && (
            <TodoList
              filteredTodos={filteredTodos}
              onCompleted={onCompleted}
              start={start}
            />)
      }
    </div>
  )
}
