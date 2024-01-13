import React from 'react';

export default function Category() {
  function handelsub(e) {
    console.log(e.target.value);
  }

  return (
    <div className="mt-5">
      <select
        onChange={handelsub}
        name="category"
        id=""
        className="
          py-3 px-6 
          rounded-full 
          border-2 border-green-500
          focus:outline-none focus:border-blue-500 
          hover:bg-green-200 hover:border-green-700 
          transition duration-300 
        "
      >
        <option className=" rounded-full " value="">Select somene tip</option>
        <option className=" rounded-full " value="Potter Plants">Potter-Plants</option>
        <option className=" rounded-full " value="Seed">Seeds</option>
        <option className=" rounded-full " value="Small Plents">Small Plants</option>
        <option className=" rounded-full " value="Big Plents">Big Plants</option>
        <option className=" rounded-full " value="Succulents">Succulents</option>
        <option className=" rounded-full "value="Trerrariums">Trerrariums</option>
        <option className=" rounded-full " value="Gardening">Gardening</option>
        <option className=" rounded-full " value="Accessories">Accessories</option>
      </select>
    </div>
  );
}
