import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TodoList = () => {
    const [allTask,setAllTask]=useState([]);

    useEffect(()=>{
        fetch('https://lit-ocean-08264.herokuapp.com/allTask', {
            method: "GET",
        })
        .then(res => res.json())
            .then(data => {
            setAllTask(data)
        })
    })
    const handleComplete =event=>{
        console.log(event)
    }
    return (
        <div>
            <div className="overflow-x-auto mt-2">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SR</th>
                            <th>Task List</th>
                            <th>Edit</th>
                            <th>Check if Done</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allTask.map((t, index) => <tr key={t._id}>
                                <th>{index + 1}</th>
                                <td>{t.task}</td>
                                <td><Link to={`/edit/${t._id}`}><button className='btn btn-primary btn-sm'>Edit</button></Link></td>
                                <td><input onClick={handleComplete} name="name" type="checkbox" class="checkbox checkbox-secondary" /></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TodoList;