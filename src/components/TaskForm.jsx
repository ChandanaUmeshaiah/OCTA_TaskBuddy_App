import React, {useState} from 'react'

export default function TaskForm() {
    return (
        <form>
            <input type ='text'
            placeholder='Enter Your Task'
            requiredvalue={task}
            onClick={(e)=> setTask(e.target.value)}/>
        <h1>{task}</h1>
        </form>
    )
}