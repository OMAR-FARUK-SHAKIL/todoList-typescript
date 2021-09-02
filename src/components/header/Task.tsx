import React from 'react';
import { visitFunctionBody } from 'typescript';
import './Header.css';

interface IProps {
    taskName: string,
    date: string
}

const completion = () =>{
const p = document.getElementsByClassName('taskCard');

}
const Task = ({taskName,date}:IProps) => {
    return (
        <div className="taskCard">
            <h1>{taskName}</h1>
            <h3>{date}</h3>
            <button onClick={()=>completion()}>complete</button>
        </div>
    );
};

export default Task;