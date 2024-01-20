const Product = ({ product, quantity, onQuantityChange, onDelete }) => {
  const handleIncrement = () => onQuantityChange(quantity + 1);
  const handleDecrement = () => onQuantityChange(Math.max(0, quantity - 1));

  return (
    <tr className="bg-softBackground w-full grid grid-cols-[0.9fr_3fr_0.5fr_1fr_1fr] items-center">
      <td className="px-6 py-2">
        <img
          src={product.image}
          alt={product.name}
          className="w-20 h-70 rounded-md object-cover"
        />
      </td>
      <td className="px-6 py-2">
        <p className="text-sm font-semibold">{product.name}</p>
        <span className="text-textThird mt-1 text-[.875rem]">
          SKU: {product.SKU}
        </span>
      </td>
      <td className="px-6 py-2">{product.price}</td>
      <td className="px-6 py-2 flex items-center gap-2">
        <button
          onClick={handleDecrement}
          disabled={quantity === 0}
          className="bg-primary text-white w-[1.31rem] h-[1.56rem] flex items-center justify-center rounded-full"
        >
          -
        </button>
        <span className="font-semibold w-[1.5rem] text-center">{quantity}</span>
        <button
          onClick={handleIncrement}
          className="bg-primary text-white w-[1.31rem] h-[1.56rem] flex items-center justify-center rounded-full"
        >
          +
        </button>
      </td>
      <td className="px-6 py-2">
        <button
          onClick={onDelete}
          className="bg-red-300 text-zinc-800 px-4 py-1 rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Product;
