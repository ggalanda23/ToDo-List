import React from 'react'
import Todoitem from './Todoitem'

const Todolist = ({ list, toggleTodo }) => {
  return (
    <div className='todo-list-container'>
      {list.map((todo, index) => (
      <Todoitem key={todo.id} item={todo} toggleTodo={toggleTodo}/>
      ))}
    </div>
  );
};

export default Todolist