import React, { useState } from 'react';
import Form from './components/Form';
import Todolist from './components/Todolist';
import './style/global.css';
import { v4 as uuid} from "uuid";

const App = () => {
  const [todolist, settodolist] = useState([
   { id: uuid(), task:"code some HACKING CODE", isComleted: false} ,
   { id: uuid(), task: "eat pizza", isComleted: true },
   { id: uuid(), task: "go to hip hop class", isComleted: false},
  ]);

   const addTodoToTodoList = (todo) => {
    const newTodo = {
      id: uuid(),
      task: todo,
      isComleted: false,
    }
    settodolist((prevTodoList) => [...prevTodoList, newTodo])
   }

   const toggleTodoCompleted = id => {
    const todolistCopy = [...todolist]
    const indexByTodoId = todolist.findIndex(todo => todo.id === id)
    const targetTodo = todolistCopy[indexByTodoId]
    todolistCopy[indexByTodoId] = { ...targetTodo,
    isComleted: !targetTodo.isComleted};
    settodolist(todolistCopy);
   }

  return (
    <div className='app-container'>
      <Form addTodoToTodoList={addTodoToTodoList} />
      <Todolist list={todolist} toggleTodo={toggleTodoCompleted} />
    </div>
  );
};

export default App
