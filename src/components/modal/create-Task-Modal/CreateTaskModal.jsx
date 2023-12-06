import React from 'react'
import '../Modal.css'

const CreateTaskModal = ({isOpen, closeModal}) => {
  if(isOpen) {
    return (
      <div className='background'>
        <div className='modal'>
          <h1>Add TODO</h1>
          <form>
            <label>
              <span>Title</span>
              <input type="text" />
            </label>
            <label>
              <span style={{marginTop:"1em"}}>Status</span>
              <select name="status" className="currentState">
                <option value="completed">Completed</option>
                <option value="incomplete">Incomplete</option>
              </select>
            </label>
            <div className='buttonsDiv'>
              <button className='addButton2'>Add Task</button>
              <button className='cancelButton' onClick={closeModal}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
      
    )
  }
  return null
}

export default CreateTaskModal