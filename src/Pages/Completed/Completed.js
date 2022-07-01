import React, { useEffect, useState } from 'react';

const Completed = () => {
    const [allTask,setAllTask]=useState([]);

    useEffect(()=>{
        fetch('https://lit-ocean-08264.herokuapp.com/allfinished', {
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allTask.map((t, index) => <tr key={t._id}>
                                <th>{index + 1}</th>
                                <td>{t.task}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Completed;