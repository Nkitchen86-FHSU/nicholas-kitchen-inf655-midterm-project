import {useEffect, useState} from "react";
import TaskForm from './TaskForm.jsx'

function TaskComponent() {
    const initTasks = [
        { id: 1, task: "Study", description: ""}, 
        { id: 2, task: "Eat", description: ""}, 
        { id: 3, task: "Exercise", description: ""}, 
        { id: 4, task: "Play Games", description: ""}, 
        { id: 5, task: "Play Baseball", description: ""}, 
        { id: 6, task: "Play Basketball", description: ""}, 
        { id: 7, task: "Sleep", description: ""}];

    const [tasks, setTasks] = useState(initTasks);
    const [searchWord, setSearch] = useState("");
    const [filteredTasks, setFilteredTasks] = useState(tasks);
    const [randomTask, setRandomTask] = useState("");

    useEffect(() => {
        setRandomTask(tasks[Math.floor(Math.random() * tasks.length)].task)
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFilteredTasks(tasks.filter(task => task.task.toLowerCase().includes(searchWord.toLowerCase())));
    };

    const handleSort = () => {
        setFilteredTasks([...filteredTasks].sort((a,b) => a.task.localeCompare(b.task)));
    };

    const handleDelete = (taskId) => {
        if(!confirm("Are you sure you want to delete this task?")) return;
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        const updatedFilteredTasks = filteredTasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
        setFilteredTasks(updatedFilteredTasks);
    }

    const addTask = (task, description) => {
        if (task === "" || description === "") return;
        const newTask = { id: tasks.length + 1, task, description };
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        setFilteredTasks(updatedTasks);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <button type="submit">Search Tasks</button>
                <input 
                    type="text" 
                    placeholder="Search tasks..."
                    value={searchWord}
                    onChange={(e) => setSearch(e.target.value)} 
                />
            </form>
            
            <ul style={{ listStyleType: 'none' }}>
                {filteredTasks.map( task => (
                    <li key={task.id}>- {task.task} <button onClick={() => handleDelete(task.id)}>Delete</button> </li>
                ))}
            </ul>

            <button onClick={handleSort}>Sort List</button>

            <div>
                < TaskForm addTask={addTask} />
            </div>

            <h3>Here is a random task to do: {randomTask}</h3>
        </>
    )
}

export default TaskComponent;