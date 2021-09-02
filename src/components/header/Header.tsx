import React, { useState } from 'react';
import Task from './Task';
//import 'Header.css';
interface ITask {
    taskName: string,
    date: string
}
const Header = () => {
    const [task, setTask] = useState<ITask>({} as ITask);
    const [taskList, setTaskList] = useState<ITask[]>([]);

    const handleTask = () => {
        setTaskList([...taskList, task]);
        setTask({
            taskName: "",
            date: ""
        })
       console.log("list=",taskList);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask({ ...task, [e.target.name]: e.target.value })
        //console.log("task=",task);
    }


    return (
        <div className="header">
            <h1>This is heading</h1>

            <input
                onChange={handleChange}
                type="text"
                name="taskName"
                value={task.taskName}
                placeholder="task Name" />

            <input type="text"
                onChange={handleChange}
                name="date"
                value={task.date}
                placeholder="task Name" />

            <button onClick={() =>handleTask()}>Add Task</button>
            {
                taskList.map(t=><Task 
                    taskName={t.taskName}
                     key={t.taskName} 
                     date={t.date}></Task>)
            }

        </div>
    );
};

export default Header;