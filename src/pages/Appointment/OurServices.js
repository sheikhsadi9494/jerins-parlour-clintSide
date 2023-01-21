import { format } from "date-fns";
import React, { useEffect, useState } from "react";

const OurServices = ({ selectedDate }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("appointment.json")
      .then((res) => res.json())
      .then((services) => setServices(services));
  }, []);
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-16">
        <span>Services</span> Available On{" "}
        <span className="text-primary">{format(selectedDate, "PP")}</span>
      </h1>
      <div className="mx-5 lg:mx-20 mt-20 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} service={service}>
              <div className="card card-compact bg-base-100 shadow-xl py-5">
                <div>
                <figure>
                  <img style={{width: '130px'}} src={service.img} alt="Shoes" />
                </figure>
                </div>
                <div className="card-body">
                  <h2 className="text-xl font-bold text-center">{service.name}</h2>
                  <p className="text-primary text-center text-lg font-semibold" >{service.slots.length} {service.slots.length > 1 ? "appointments" : "appointment"} available </p>
                  {/* <p className="text-primary text-center text-xl font-semibold" >${service.price}</p> */}
                  <p className="text-lg text-center px-5" >{service.discription}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary mx-auto mt-3 text-white">Book Appointment</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
