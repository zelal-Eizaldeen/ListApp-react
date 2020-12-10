import React, {useState} from 'react';
import uuid from 'uuid/dist/v4';
function NewTodoForm(props) {
const [task, setTask] = useState({task: ""});

const handleChange = (e) => {
  setTask({
    [e.target.name]: e.target.value
  })
}
const handleSubmit = (e) => {
  e.preventDefault();
  props.createTodo({...task, id: uuid(), completed: false});
  setTask({task: ""})
}

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor='task'>New Todo</label>
      <input 
        type='text' 
        placeholder='New Todo' 
        id='task' 
        name='task'
        value={task.task}
        onChange={handleChange}
      />
    <button>Add to Do</button>
    </form>
  )
}
export default NewTodoForm;