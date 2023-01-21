import { format } from 'date-fns';
import React from 'react';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';

const HomeServices = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    let footer = <p>Please pick a day.</p>;
    if (selectedDate) {
      footer = <p>You picked {format(selectedDate, 'PP')}.</p>;
    }
    return (
        <div>
            <h1 className='text-center text-4xl font-bold my-20'><span className='text-primary'>Services</span> We Provide</h1>
            <DayPicker
      mode="single"
      selected={selectedDate}
      onSelect={setSelectedDate}
      footer={footer}
    />
        </div>
    );
};

export default HomeServices;