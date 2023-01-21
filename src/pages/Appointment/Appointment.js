import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AppointmentModal from './AppointmentModal';
import OurServices from './OurServices';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointment, setAppointment] = useState(null);

    if(!selectedDate){
        setSelectedDate(new Date())
    }
    return (
        <div>
            <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
            <OurServices setAppointment={setAppointment} selectedDate={selectedDate} />
            {
                appointment && 
                <AppointmentModal appointment={appointment} setAppointment={setAppointment} selectedDate={selectedDate}/>

            }
        </div>
    );
};

export default Appointment;