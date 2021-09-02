import React from 'react';
import { visitFunctionBody } from 'typescript';
import './Header.css';

interface IProps {
    taskName: string,
    date: string
}


const Task = ({taskName,date}:IProps) => {
    let val = true;
    const completion = () =>{
        val=false;
        
        }
    return (
        <div className={val?"taskCard":"greenCard"}>
            <h1>{taskName}</h1>
            <h3>{date}</h3>
            <button onClick={()=>completion()}>complete</button>
            <input type="checkbox" name="" id="" />
            
        </div>
    );
};

export default Task;