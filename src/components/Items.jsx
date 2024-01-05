import React, { useState } from "react";
// import arr from "..pages/arr";
// import abrr from "..pages/abrr";
const Items = ({
  image,
  description,
  price,
  addHandler,
  removeHandler,
  index,
  value,
}) => {
  return (
    <>
      <div className="w-52 h-72 flex flex-col justify-center items-center my-20">
        <div className="w-48 h-72 justify-center items-center">
          <img className="bg-contains" src={image} alt="" />
        </div>
        <p className="font-medium"> {description}</p>
        <h1 className="text-xl font-medium">price : {price}</h1>
        <div className=" w-48 flex justify-between mt-5">
          <button
            className="bg-blue-400 p-2 rounded text-white"
            onClick={() => addHandler(value)}
          >
            Add to Cart
          </button>
          <button
            className="bg-red-300 p-2 rounded text-white"
            onClick={() => removeHandler(index)}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default Items;
