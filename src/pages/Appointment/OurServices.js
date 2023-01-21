import { format } from "date-fns";
import React from "react";

const OurServices = ({selectedDate}) => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-20">
        <span>Services</span> Available On <sapn className="text-primary">{format(selectedDate, 'PP')}</sapn>
      </h1>
    </div>
  );
};

export default OurServices;
