import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditTask = () => {
    const {id}=useParams();
    const [taskList,setTaskList]=useState({});

    useEffect(()=>{
        const uri =`https://lit-ocean-08264.herokuapp.com/allTask/${id}`
        fetch(uri)
        .then(res => res.json())
        .then(data => setTaskList(data))
    },[]);


    const handleUpdate =event=>{
        event.preventDefault();
        const task=event.target.task.value;

        const updateTask ={
            task
        }
        // send data  server
        const uri =`https://lit-ocean-08264.herokuapp.com/task/${id}`;
        fetch(uri, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data,'successfully added')
                event.target.reset();
            })
    }
    return (
        <div>
            <h2>Edit: {taskList.task}</h2>
            <div class="hero-content text-center">
    <div class="max-w-md">
    <div className="card-body">
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <h1 className='text-primary text-2xl font-bold'>Update Task</h1>
        <form onSubmit={handleUpdate}>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Task</span>
          </label>
          <input type="text" name='task' placeholder="Task" class="input input-bordered" />
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Update</button>
        </div>
        </form>
      </div>
    </div>
    </div>
    </div>
    </div>
        </div>
    );
};

export default EditTask;