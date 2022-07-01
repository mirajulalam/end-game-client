import React from 'react';
import { Link } from 'react-router-dom';

const CompletedDetail = ({complete}) => {
    const {_id,task}=complete;

    const handleComplete =(id,task)=>{
        const addTask ={
            id:id,
            task:task
        }
        fetch('https://lit-ocean-08264.herokuapp.com/finished', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addTask)
        })
        .then(res =>res.json())
        .then(data => console.log(data))

        fetch(`https://lit-ocean-08264.herokuapp.com/task/${id}`, {
            method: "DELETE",
        })
        .then(res =>res.json())
        .then(data => console.log(data))
        
    }
    return (
        <tbody>
        <tr>
            <td>{task}</td>
            <td><Link to={`/edit/${_id}`}><button className='btn btn-primary btn-sm'>Edit</button></Link></td>
            <td><input onClick={()=>handleComplete(_id,task)} type="radio" name="radio-1" class="radio" /></td>
        </tr>
        </tbody>
    );
};

export default CompletedDetail;