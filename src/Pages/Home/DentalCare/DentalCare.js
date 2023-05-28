import React from 'react';
import img from "../../../assets/images/treatment.png";

const DentalCare = () => {
  return (
    <div className="hero mt-32 ">
    <div className="hero-content flex-col lg:flex-row ">
      <img src={img} className="lg:w-1/3" alt="" />
      <div className="lg:ml-20 lg:w-1/3">
        <h1 className="text-5xl font-bold">
          Exceptional Dental Care, on Your Terms
        </h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
          a id nisi.
        </p>
        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">
          Get Started
        </button>
      </div>
    </div>
  </div>
  );
};

export default DentalCare;