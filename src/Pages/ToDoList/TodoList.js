import React, { useEffect, useState } from 'react';
import CompletedDetail from '../CompletedDetail/CompletedDetail';

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
            <div className="overflow-x-auto mt-3">
                <table className="table w-full">
                <thead>
                    <tr>
                        <th>Task List</th>
                        <th>Edit</th>
                        <th>Check if Done</th>
                    </tr>
                </thead>
                    {
                     allTask.map(complete=><CompletedDetail
                       key={complete._id}
                      complete={complete}
                      index={complete.index}
                      ></CompletedDetail>)
                    }
                </table>
            </div>
    );
};

export default TodoList;