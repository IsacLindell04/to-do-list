import React, {useState} from "react";

const Task = ({setList}) => {
    const [newTask,  setNewTask] = useState('');

    function handleInputChange(e) {
        setNewTask(e.target.value);
    }

    function handleClick(e){
        e.preventDefault();
        if(newTask.trim() !== '') {
            setList((prev) => {
            return [...prev, newTask]
        })
        setNewTask('');
        }
    }

  return (
    <div className="add-task-div">
        <input className="input" type="text" placeholder="Add task..." value={newTask} onChange={handleInputChange}/>
        <button className="add-button" onClick={handleClick}>+</button>
    </div> 
  )
}

export default Task
