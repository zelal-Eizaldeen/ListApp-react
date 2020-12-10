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
        <form className='Todo-edit-form' onSubmit={handleUpdate}>
          <input type="text" name='task' value={task.task} name='task' onChange={handleChange}/>
          <button>Save</button>
        </form>
      </div>
    )
  } else {
    result=(
      <div className="Todo">
         <li className={props.completed ? 'Todo-task completed' : 'Todo-task'}
       onClick={handleToggle}
      >
       {props.task} </li>
       <div className='Todo-buttons'>
          <button onClick={toggleForm}>
            <i class='fas fa-pen' />
          </button>
          <button onClick={handleRemove}>
            <i class='fas fa-trash' />
          </button>
        </div>
      </div>
    )
  }
  return result;

}
export default Todo;