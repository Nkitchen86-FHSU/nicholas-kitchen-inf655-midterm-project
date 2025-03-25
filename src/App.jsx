/*
Task 3: Expand Task List with Dynamic Filtering and Sorting (5 Points)
Update your TaskComponent to include a search feature.
Add an input field that filters the displayed tasks based on the entered text.
Add a "Sort by Name" button that sorts the tasks alphabetically when clicked.
Example Output:
[Search Tasks] [ Buy ]
- Buy groceries
- Buy office supplies
 
[Sort by Name]
Task 4: Create a Task Management Form with State and Validation (5 Points)
Create a new TaskForm component.
Add an input field for entering a task name and a description field.
Use useState to store and manage these values.
Add a Submit button that adds the new task to the list of tasks.
Add form validation to ensure the task name and description are not empty before submission.
Example Output:
[Enter Task Name] [Enter Description] [Add Task]
The new task should appear dynamically in the task list.
Task 5: Add Delete Functionality with Confirmation (5 Points)
Add a delete button next to each task in the list.
Pass the delete function as a prop from the App component to the TaskComponent.
Add a confirmation prompt before deleting a task.
Example Output:
- Task 1 [Delete]
- Task 2 [Delete]
Clicking "Delete" should ask for confirmation before removing the task from the list.
*/

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
