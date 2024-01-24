import React from "react";
import plantImage from "/src/images/plant19.png";

const Products = ({ product, quantity }) => {
  return (
    <div className="bg-softBackground mt-2 mb-3 w-full flex justify-between items-center">
      <div className="w-16 mr-3">
        <img src={plantImage} alt={product.name} className="w-full" />
      </div>
      <div className="px-6 py-2 mr-6 text-textSecondary ">
        <p className="text-sm font-semibold">{product.name}</p>
        <span className="text-textThird mt-1 text-[.875rem]">
          SKU: {Math.round(Math.random() * 100000)}
        </span>
      </div>
      <span className="font-semibold w-[1.5rem] text-center text-textSecondary">
        ({quantity})
      </span>
      <span className="px-6 py-2 text-primary">${product.price}</span>
    </div>
  );
};

export default Products;
