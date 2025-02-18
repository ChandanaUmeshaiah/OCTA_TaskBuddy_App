import React, { useState } from 'react'

export default function TaskForm(addTask) {
     const [task, setTask] = useState('');
     const [priority, setPriority] = useState("Medium");
     const [category, setCategory] = useState("General");

     const handlesubmit =(e)=>{
        e.preventDefault();
        addTask({text: task, priority, category,completed: false});
        setPriority("Medium");
        setCategory('General');
        setTask("");
     }

     return (
        <form onSubmit={handlesubmit} className ='task-form'>
           <div id ="inp">
            <input type ='text'
            placeholder='Enter Your Task'
            required
            value = {task}
            onChange = {(e)=> setTask(e.target.value)}/>
        <span><button>Add Tasks</button></span>          
   </div>

   <div className='btns'>
    <select value = {priority} onChange={(e)=>setPriority(e.target.value)}>
        <option>Medium</option>
        <option>Low</option>
        <option>high</option>
    </select>

    <select value ={category}onChange={(e)=>setCategory(e.target.value)}>
        <option>general</option>
        <option>Work</option>
        <option>Personal</option>
    </select>
   </div>
   </form>
)
}