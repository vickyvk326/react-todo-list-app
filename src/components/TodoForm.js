import React,{useState} from 'react'

const TodoForm = ({addTodo}) => {

  const [value,setValue] = useState('')
  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value);
    setValue('')
  }
  return (
    <div>
        <form className='TodoForm'>
            <input type='text' value={value} onChange={(e)=>setValue(e.target.value)} className='todo-input' placeholder='What is the task today?' />
            <button type='submit' onClick={handleSubmit} className='todo-btn' >Add task</button>
        </form>
    </div>
  )
}

export default TodoForm