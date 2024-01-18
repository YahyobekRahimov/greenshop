const Product = ({ product, quantity, onQuantityChange, onDelete }) => {
  const handleIncrement = () => onQuantityChange(quantity + 1);
  const handleDecrement = () => onQuantityChange(Math.max(0, quantity - 1));

  return (
    <tr className="bg-softBackground">
      <td className="px-6 py-2">
        <img
          src={product.image}
          alt={product.name}
          className="w-20 h-70 rounded-md object-cover"
        />
      </td>
      <td className="px-6 py-2">
        <p className="text-sm font-semibold">{product.name}</p>
      </td>
      <td className="px-6 py-2">{product.price}</td>
      <td className="px-6 py-2 flex items-center">
        <button
          onClick={handleDecrement}
          disabled={quantity === 0}
          className="bg-primary text-white  px-2 py-1 rounded-md mr-2"
        >
          -
        </button>
        <span className="font-semibold mr-1">{quantity}</span>
        <button
          onClick={handleIncrement}
          className="bg-primary text-white px-2 py-1 rounded-md"
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
