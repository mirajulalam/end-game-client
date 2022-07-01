import React, { useEffect, useState } from 'react';

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
                                <td><button className='btn btn-primary btn-sm'>Edit</button></td>
                                <td><input type="checkbox" class="checkbox checkbox-secondary" /></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TodoList;