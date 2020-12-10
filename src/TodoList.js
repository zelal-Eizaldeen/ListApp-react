import React, {useEffect, useState} from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css'
function TodoList(props) {
  
  const [todos, setTodos] = useState([]);
  const create = (newTodo) => {
    setTodos([...todos, newTodo])
  }
  const remove = (id) => {
    setTodos(prevList => prevList.filter(t => t.id !== id))

  }
  const update = (id, updatedTask) => {
    const updatedTodos = todos.map(todo => {
      if(todo.id === id) {  
        return{...todo, task: updatedTask.task}
      } 
       return todo;
    })
    setTodos(updatedTodos);
  }
  const toggleCompletion = (id) => {
    const updatedTodos = todos.map(todo => {
      if(todo.id === id) {  
        return{...todo, completed: !todo.completed};
      } 
       return todo;
    })
    setTodos(updatedTodos);
  }
  const toDos = todos.map(todo => {
      return (
      <Todo
         key={todo.id}
         id={todo.id}
         task={todo.task} 
         completed={todo.completed}
         removeTodo={remove}
         updateTodo={update}
         toggleTodo={toggleCompletion}
      />
      )
  })
  
  return (
    <div className="TodoList">
      <h1>Todo List <span>Simple React Todo List App.</span></h1>
      <ul>
       {toDos}
      </ul>
      <NewTodoForm createTodo={create} />

    </div>
  )
}
export default TodoList;