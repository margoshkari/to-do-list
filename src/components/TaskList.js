import React from "react";

function TaskList({tasks}) {
 return(
    <div>
        {tasks.map(task => 
            <div className='task' key={task.id} >
                <input type={'checkbox'} checked={task.checked}></input>
                {task.text}
            </div>
        )}
    </div>
 );
}

export default TaskList;