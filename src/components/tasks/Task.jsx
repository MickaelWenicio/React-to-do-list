import React from 'react'
import './Task.css'
import './CheckboxStyle.css'

const Task = () => {
  return (
    <div className='todoItem'>
        <div className='fp'>
            <div className='checkDiv'>
            
                <input type="checkbox" id='cbx'/>
                <label htmlFor="cbx"></label>
            
            </div>
            <div className="infos">
                <p className="taskDescription">
                    Tarefa
                </p>
                <p className="time">2:51 PM, 12/12/2023</p>
            </div>
        </div>
        <div className="sp">
            <button>
                <span class="material-symbols-outlined">delete</span>
            </button>
            <button>
                <span class="material-symbols-outlined">edit</span>
            </button>
        </div>
        
        
    </div>
  )
}

export default Task