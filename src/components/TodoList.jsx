import React from 'react'
import TodoItem from './TodoItem'
export default function TodoList ({ filteredTodos, onCompleted, start }) {
  return (
    <div className='itemArea'>
      <ul>
        {
          filteredTodos.map(todo => (
            <TodoItem
              key={`${todo.id}-${todo.nombre}`}
              todo={todo}
              onCompleted={onCompleted}
              start={start}
            />
          ))
        }
      </ul>
    </div>
  )
}
