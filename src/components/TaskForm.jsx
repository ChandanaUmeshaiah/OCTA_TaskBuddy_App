import React, {useState} from 'react'

export default function TaskForm() {
    const [task, setTask]=useState('');
    return (
        <form>
            <input type ='text'
            placeholder='Enter Your Task'
            required
            value = {task}
            onChange = {(e)=> setTask(e.target.value)}/>
        <span><button>Add Tasks</button></span>          
   <div>
    <select>
        <option>Medium</option>
        <option>Low</option>
        <option>high</option>
    </select>
    <select>
        <option>general</option>
        <option>Work</option>
        <option>Personal</option>
    </select>
   </div>
   </form>
)
}