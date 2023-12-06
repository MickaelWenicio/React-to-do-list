import React from 'react'
import './TodoApp.css'
import Task from '../tasks/Task'

const TodoApp = () => {
  return (
    <div className='container'>
        <div className='titleDiv'>
            <h1>TODO LIST</h1>
        </div>
        <div className='appDiv'>
          <div className="controlDiv">
            <button className='addButton'>Add Task</button>
            <select name="status" id="status">
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="incomplete">Incomplete</option>
            </select>
          </div>       
        </div>
        <div className="tasks">
          <Task/>
        </div>
        
    </div>
  )
}

export default TodoApp