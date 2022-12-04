import React from 'react'

const ToDoItem = ({ item , toggleTodo }) => {
  return (
    <div className='todo-item-container'>
        <span style={{textDecoration: item.isComleted ? "line-through" : ""}}> {item.task} </span>
        <input 
        type="checkbox" 
        onChange={() => toggleTodo(item.id)} 
        checked={item.isComleted}
        />
    </div>
  )
}

export default ToDoItem