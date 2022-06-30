import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calendar = () => {
    const [date,setDate]=useState(new Date())
    return (
        <div class="hero">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-4xl font-bold text-primary mb-8">Calender</h1>
      <DayPicker 
       mode="single"
       selected={date}
       onSelect={setDate}
       />
       <p className='text-2xl font-medium mb-8'>You have selected : {format(date,'PP')}</p>
    </div>
  </div>
</div>
    );
};

export default Calendar;