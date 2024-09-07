import { useState } from "react";
import useCart from "../../Components/hooks/useCart";

const OrderDetails = () => {
  const [cart] = useCart();
  const [quantity, setQuantity] = useState(1);
  // Function to handle increment
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to handle decrement (prevent going below 1)
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  // Calculate total price dynamically based on cart items
  const totalPrice = cart.reduce(
    (total, item) => total + (item.currentPrice || 0) * (item.quantity || 1),
    0
  );
  return (
    <div className="flex justify-between mt-10 px-6 max-w-screen-xl mx-auto">
      {/* Cart Items Section */}
      <div className="space-y-6 w-[740px]">
        {cart.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b pb-4"
          >
            <div className="flex items-center">
              <div className="flex items-center border border-gray-300 rounded-lg">
                {/* Decrement Button */}
                <button
                  onClick={handleDecrement}
                  className="px-4 py-2 text-gray-500 focus:outline-none hover:bg-gray-100 rounded-l-lg"
                >
                  −
                </button>

                {/* Quantity Display */}
                <span className="px-6 py-2 text-lg font-semibold">
                  {quantity}
                </span>

                {/* Increment Button */}
                <button
                  onClick={handleIncrement}
                  className="px-4 py-2 text-gray-500 focus:outline-none hover:bg-gray-100 rounded-r-lg"
                >
                  +
                </button>
              </div>
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 ml-4 rounded-lg"
              />
            </div>
            <div className="flex-grow ml-4">
              <h3 className="font-semibold">{item.name}</h3>
            </div>
            <div className="space-y-5">
              <button className="text-[#939393] font-bold text-xl ml-9">
                ×
              </button>
              <div className="text-lg font-bold">€{item.currentPrice}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="w-[380px] bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>€{totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping</span>
          <span className="text-green-600">Free</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Estimated Tax</span>
          <span>€0.00</span>
        </div>
        <div className="flex justify-between text-lg font-bold mb-4">
          <span>Total</span>
          <span>€{totalPrice.toFixed(2)}</span>
        </div>
        <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900">
          GO TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;
