import React from 'react';
import Calendar from '../Calendar/Calendar';
import ContactUs from './../ContactUs/ContactUs';
import About from './../About/About';
import AddTask from '../AddTask/AddTask';
import TodoList from '../ToDoList/TodoList';

const Home = () => {
    return (
        <div>
            <AddTask/>
            <TodoList/>
            <About/>
            <Calendar/>
            <ContactUs/>
        </div>
    );
};

export default Home;