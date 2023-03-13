import React from 'react';
import { useState } from 'react';
import "./styles/App.css"
import TaskList from './components/TaskList';

function App() { 
  const [tasks, setTask] = useState([{id: "1", text: "First", checked: false}]);
  return (
    <div className="App">
      <form>
        <input type={'text'} placeholder="add new task..."/>
        <button>Add</button>
      </form>
      <div className='Task-block'>
            <TaskList tasks={tasks}/>
        </div>
     </div>
  );
}

export default App;
