import { format } from "date-fns";
import React from "react";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import img from "../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png";

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {

  let footer = <p>Please pick a day.</p>;
  if (selectedDate) {
    footer = <p>You picked {format(selectedDate, "PP")}.</p>;
  }
  return (
    <div>
      <div className="hero pt-11 pb-20 bg-secondary">
        <div className="hero-content flex-col lg:flex-row-reverse justify-around ">
          <div className="lg:w-2/5 lg:mb-0 mb-6">
            <img src={img} className="rounded-lg" alt="women" />
          </div>
          <div className="lg:w-2/5">
            <h1 className=" text-4xl mb-10 font-bold">
              Book <span className="text-primary">Appointment</span> Now! To Get
              Our Service
            </h1>

            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              footer={footer}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
