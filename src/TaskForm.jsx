import { useState } from "react";

function TaskForm({ addTask }) {
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(task, description);
        setTask("");
        setDescription("");
    };
    return (
        <>
            <p>Enter Task Name and Description</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Task name..." value={task} onChange={(e) => setTask(e.target.value)} />
                <input type="text" placeholder="Task description..." value={description} onChange={(e) => setDescription(e.target.value)} />
                <button type="submit">Add Task</button>
            </form>
        </>
    )
}

export default TaskForm;