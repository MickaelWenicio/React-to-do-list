import React, { useState } from 'react'
import './TodoApp.css'
import Task from '../tasks/Task'
import CreateTaskModal from '../modal/create-Task-Modal/CreateTaskModal'

const TodoApp = () => {

  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='container'>
        <div className='titleDiv'>
            <h1>TODO LIST</h1>
        </div>
        <div className='appDiv'>
          <div className="controlDiv">
            <button className='addButton' onClick={()=>{setOpenModal(true)}}>Add Task</button>
            <select name="status" id="status">
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="incomplete">Incomplete</option>
            </select>
          </div>       
        </div>
        <div className="tasks">
          <Task/>
          <CreateTaskModal isOpen={openModal} closeModal={()=>{setOpenModal(false)}}/>
        </div>
        
    </div>
  )
}

export default TodoApp