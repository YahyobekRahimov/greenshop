import React from 'react';
import Silder from '../../components/Slider'

export default function Category() {
  function handelsub(e) {
    console.log(e.target.value);
  }

  return (
    <div className="flex gap-10 mt-5 absolute top-[4.5rem] left-[33rem]">
      <select
        onChange={handelsub}
        name="category"
        id=""
        className="
        h-[4rem]
        w-[15.5rem]
        text-xl
          py-3 px-6 
        
          border-2 border-green-500
          
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
      <Silder></Silder>
    </div>
  );
}
