import React from "react";

const Card = ({ testimonial }) => {
  return (
    <div>
      <div className="">
        <p className="font-header font-light md:text-2xl text-xl leading-9">
          <q>{testimonial.description}</q>
        </p>
        <p className="mt-3">
          <b>{testimonial.name}</b>
        </p>
        <p>{testimonial.position}</p>
      </div>
    </div>
  );
};

export default Card;
