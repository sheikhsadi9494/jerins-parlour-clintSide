import React from "react";
import { format } from "date-fns";

const AppointmentModal = ({ appointment, selectedDate, setAppointment}) => {
  const { name, slots} = appointment;
  const appointmentDate = format(selectedDate, "PP");

  const bookingHandlar = (event) => {
    event.preventDefault();
    const form = event.target;
    const costomer = form.costomer.value;
    const email = form.email.value;
    const slot = form.slot.value;

    const appointment = {
      serviceName: name,
      appointmentDate: appointmentDate,
      costomer, 
      email,
      slot,
    }

    console.log(appointment);
    // close modal 
    setAppointment(null);
  }

  return (
    <div>
      <input
        type="checkbox"
        id="book-appointment-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            style={{ border: "none" }}
            htmlFor="book-appointment-modal"
            className="btn btn-sm btn-circle absolute bg-primary hover:bg-primary text-white right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={bookingHandlar} action="">
          <div className="mt-5">
            <input
              type="text"
              placeholder="Appointment Date"
              className="input input-bordered w-full bg-gray-100 mb-4"
              name="appointmentDate"
              defaultValue={appointmentDate}
            />
            <select name="slot" className="select select-bordered w-full bg-gray-100 mb-4">
              {
                slots.map((slot, i) => <option key={slot} slot={slot}>
                  {slot}
                </option>)
              }
            </select>
            <input
              type="text"
              placeholder="Your Name"
              name="costomer"
              className="input input-bordered w-full bg-gray-100 mb-4"
            />
            <input
              type="text"
              placeholder="Your Email"
              name="email"
              className="input input-bordered w-full bg-gray-100 mb-4"
            />
            <button type="submit" className="btn btn-primary text-white w-full">
              Submit
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
