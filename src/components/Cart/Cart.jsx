import { useCart } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, addItem, removeItem, clearCart } = useCart();
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="mx-auto px-[1rem] sm:px-[10.2rem] mt-[6rem]">
      <div className="p-4 mt-[7rem] min-h-screen bg-gray-900 text-white mb-[5rem]">
        <div className="flex justify-between items-center w-full mx-auto mb-6">
          <h1 className="text-3xl font-bold">🛒 Your Cart</h1>
          {cartItems.length > 0 && (
            <button
              onClick={clearCart}
              className="bg-red-600 text-white px-4 py-2 text-sm rounded-lg hover:bg-red-700 duration-300"
            >
              Clear Cart
            </button>
          )}
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center">
          <p className="mx-auto text-gray-400 text-3xl text-center">
            No items in the cart. <span className="text-5xl">🫗</span>
          </p>

          <a href="/furnitures">
            <button className="bg-red-600 text-white px-10 py-4 rounded-full hover:bg-red-700 duration-300 text-2xl mt-[3rem] cursor-pointer ">Shop Now</button>
          </a>
          </div>
        ) : (
          <div className="w-full mx-auto space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full sm:w-32 h-32 object-contain bg-gradient-to-br from-[#fbf3e9] to-[#f3d9b0]"
                />

                <div className="p-4 flex flex-col sm:flex-row justify-between w-full sm:items-center">
                  <div>
                    <h2 className="text-xl text-red-600 font-semibold">
                      -{item.discount}
                    </h2>
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                    <p className="text-gray-400 mt-1">Price: ${item.price}</p>
                  </div>

                  <div className="mt-4 sm:mt-0 sm:ml-auto text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="bg-white px-3 py-1 rounded-lg text-black text-sm hover:bg-red-500 hover:scale-115 duration-300"
                      >
                        −
                      </button>
                      <span className="px-2">{item.quantity}</span>
                      <button
                        onClick={() => addItem(item)}
                        className="bg-green-500 px-3 py-1 rounded-lg text-white text-sm hover:bg-green-600 hover:scale-115 duration-300"
                      >
                        +
                      </button>
                    </div>
                    <p className="mt-2 font-semibold text-red-400">
                      <span className="text-gray-400">Total: </span>{" "}
                      <span className="text-white">
                        ${item.price} x {item.quantity} ={" "}
                      </span>
                      <span>${item.quantity * item.price}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="text-right mt-6 border-t pt-4">
              <h2 className="text-2xl font-bold">
                Grand Total:{" "}
                <span className="text-green-400">
                  ${totalAmount.toFixed(2)}
                </span>
              </h2>
              <button
                onClick={() => navigate("/payment")}
                className="mt-[2rem] bg-green-500 rounded-4xl py-2 px-6 text-2xl font-semibold text-gray-900 hover:scale-125 duration-300 cursor-pointer mr-[1rem]"
              >
                Proceed to Pay
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
