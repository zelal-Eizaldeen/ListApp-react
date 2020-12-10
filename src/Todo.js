import React, { useState } from 'react';
import './Todo.css'
function Todo(props) {
  const [isEditing, setIsEditing] = useState(false)
   const [task, setTask] = useState({task:props.task})

  const handleRemove = () => {
    props.removeTodo(props.id)
  }
  const toggleForm = () => {
    setIsEditing(!isEditing)
  }
  const handleUpdate = (e) => {
    e.preventDefault();
    props.updateTodo(props.id, task);
    setIsEditing(false);
  }
  const handleChange = (e) => {
    setTask(
      {
       [e.target.name]: e.target.value
      })
  }
  const handleToggle = (e) => {
    props.toggleTodo(props.id)
  }
  let result;
  if(isEditing){
    result=(
      <div className="Todo">
        <form onSubmit={handleUpdate}>
          <input type="text" name='task' value={task.task} name='task' onChange={handleChange}/>
          <button>Save</button>
        </form>
      </div>
    )
  } else {
    result=(
      <div className="Todo">
      <button onClick={toggleForm}>Edit</button>
      <button onClick={handleRemove}>X</button>
      <li className={props.completed ? 'Todo-task completed' : 'Todo-task'}
       onClick={handleToggle}
      >
       {props.task} </li>
    </div>
    )
  }
  return result;

}
export default Todo;