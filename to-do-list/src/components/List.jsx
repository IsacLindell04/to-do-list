import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import Task from "./Task"

const List = () => {
    const [list, setList] = useState([]);

    const element = <FontAwesomeIcon icon={faTrashCan} />

    function deleteTask(index) {
        const filterArr = list.filter((element, currentIndex) => currentIndex !== index);
        setList(filterArr);
    }

  return (
    <div>
        <Task setList={setList}/>
        <ul>
            {list.map((item, index) => {
                return <li className="list" key={index}>
                    <div className="task-div">
                    <p className="task-text">{item}</p>
                    <button 
                        className="delete-button"
                        onClick={() => deleteTask(index)}>
                        {element} 
                    </button>
                    </div>
                </li>
            })}
        </ul>
    </div>
  )
}

export default List
