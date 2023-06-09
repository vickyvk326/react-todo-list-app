import React,{useState} from 'react'

const EditTodoForm = ({editTodo, task}) => {

  const [value,setValue] = useState(task.task)
  const handleSubmit = e => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue('')
  }
  return (
    <div>
        <form className='TodoForm'>
            <input type='text' value={value} onChange={(e)=>setValue(e.target.value)} className='todo-input' placeholder='Update task' />
            <button type='submit' onClick={handleSubmit} className='todo-btn' >Update task</button>
        </form>
    </div>
  )
}

export default EditTodoForm