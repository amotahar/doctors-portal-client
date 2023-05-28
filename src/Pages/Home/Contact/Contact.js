import React from 'react';
import appointment from "../../../assets/images/appointment.png";
const Contact = () => {
  return (
    <section
      className="mt-32 p-6"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <h2 className="text-secondary text-center font-bold text-xl">
        Contact Us
      </h2>
      <h2 className="text-white text-center text-4xl font-bold">
        Stay connected with us
      </h2>
      <form className="text-center mt-6">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-full max-w-xs mb-2"
        />
        <br />
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-full max-w-xs mb-2"
        />
        <br />
        <textarea
          placeholder="Bio"
          className="textarea textarea-bordered textarea-md w-full max-w-xs mb-2"
        ></textarea>
        <br />
        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">
          Submit
        </button>
      </form>
    </section>
  );
};


export default Contact;