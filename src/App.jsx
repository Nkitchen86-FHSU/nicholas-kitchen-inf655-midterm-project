import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeting.jsx'
import UserInfo from './UserInfo.jsx'
import TaskComponent from './TaskComponent.jsx'

function handleAlert() {
  alert("It is time to do your task!");
}

function App() {
  const [count, setCount] = useState(0)
    let myTasks = [
        { id: 1, task: "Study", description: ""}, 
        { id: 2, task: "Eat", description: ""}, 
        { id: 3, task: "Exercise", description: ""}, 
        { id: 4, task: "Play Games", description: ""}, 
        { id: 5, task: "Play Baseball", description: ""}, 
        { id: 6, task: "Play Basketball", description: ""}, 
        { id: 7, task: "Sleep", description: ""}];

  return (
    <>
      <div>
        <Greeting username="Nick"/>
        <UserInfo handleClick={handleAlert}/>
        <TaskComponent />
      </div>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          <p>Click Me</p>
        </button>
        <p>(Clicking the button increases the count)</p>
      </div>
      {/*
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      */}
    </>
  )
}

export default App;
