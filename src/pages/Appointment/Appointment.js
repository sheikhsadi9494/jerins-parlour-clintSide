import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import OurServices from './OurServices';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    if(!selectedDate){
        setSelectedDate(new Date())
    }
    return (
        <div>
            <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
            <OurServices selectedDate={selectedDate} />
        </div>
    );
};

export default Appointment;