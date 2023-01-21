import React from "react";
import img from "../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png";

const Banner = () => {
  return (
    <div>
      <div className="hero pt-11 pb-20 bg-secondary">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between ">
          <div className="lg:w-2/5 lg:mb-0 mb-6">
            <img src={img} className="rounded-lg" alt="women" />
          </div>
          <div className="lg:w-2/5">
            <h1 className="text-5xl font-bold">BEAUTY SALON</h1>
            <h1 className="text-5xl font-bold">FOR EVERY WOMEN</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary text-white capitalize">Get an Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
