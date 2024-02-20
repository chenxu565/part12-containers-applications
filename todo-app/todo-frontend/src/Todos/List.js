import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <React.Fragment key={todo._id}>
        <Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
        <hr />
      </React.Fragment>
      ))}
    </div>
  )
}

export default TodoList
