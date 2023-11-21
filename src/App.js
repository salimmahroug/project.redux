import './App.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { addTodo, competeTodo, delateTodo } from './Action/TodoAction';
function App() {
  const [task, setTask] = useState("")
  const todos = useSelector(state => state.todoReducer)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <div className='div'>
        <input className='input' type='text' placeholder="add task..." onChange={(e) => setTask(e.target.value)} />
        <button className='add' onClick={() => dispatch(addTodo(task))}>add task</button>
        {todos.map(el => <div>
          <h2>{el.title}</h2>
          <button className='bb' onClick={() => dispatch(delateTodo(el.id))}>DELATE</button>
          <button className='bbb' onClick={() => dispatch(competeTodo(el.id))}>complete</button>
        </div>)}
      </div>
    </div>
  );
}
export default App;
