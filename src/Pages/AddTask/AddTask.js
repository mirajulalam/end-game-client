import React from 'react';
import swal from 'sweetalert';

const AddTask = () => {
    const handleSubmit =event=>{
        event.preventDefault();
        const task=event.target.task.value;

        const addTask ={
            task,
            checked:false
        }
        console.log('addtask',addTask)
        fetch('https://lit-ocean-08264.herokuapp.com/task', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data,'successfully added');
                swal("Successfully", "Task added successfull", "success");

                event.target.reset();
            })
    }
    return (
  <div class="hero min-h-screen bg-base-200">
   <div class="hero-content text-center">
    <div class="max-w-md">
    <div className="card-body">
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <h1 className='text-primary text-2xl font-bold'>Task Name</h1>
        <form onSubmit={handleSubmit}>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Task</span>
          </label>
          <input type="text" name='task' placeholder="Task" class="input input-bordered" />
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

export default AddTask;