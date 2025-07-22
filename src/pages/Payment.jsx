import React, { useState } from "react";
import { useCart } from "@/Context/CartContext";
import { useNavigate } from "react-router-dom";
import { FaUniversity, FaCreditCard, FaMobileAlt } from "react-icons/fa";

const Payment = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [isPaying, setIsPaying] = useState(false);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePayment = () => {
    setIsPaying(true);
    setTimeout(() => {
      alert(
        `✅ Payment of $${totalAmount.toFixed(2)} via ${paymentMethod.toUpperCase()} was successful!`
      );
      clearCart();
      navigate("/");
    }, 2000); 
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4 py-10">
      <div className="bg-gray-800 p-8 rounded-xl w-full max-w-xl shadow-lg animate-fade-in">
        <h1 className="text-3xl font-bold mb-6 text-center">Complete Your Payment</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[
            { value: "upi", label: "UPI", icon: <FaMobileAlt size={22} /> },
            { value: "card", label: "Card", icon: <FaCreditCard size={22} /> },
            { value: "netbanking", label: "Netbanking", icon: <FaUniversity size={22} /> },
          ].map(({ value, label, icon }) => (
            <div
              key={value}
              onClick={() => setPaymentMethod(value)}
              className={`cursor-pointer border-2 rounded-xl p-4 text-center transition duration-300 ${
                paymentMethod === value
                  ? "border-[#f42c37] bg-gray-700"
                  : "border-gray-600 hover:border-[#f42c37]/50"
              }`}
            >
              <div className="flex justify-center mb-2 text-[#f42c37]">{icon}</div>
              <p className="capitalize font-medium">{label}</p>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {paymentMethod === "upi" && (
            <input
              type="text"
              placeholder="Enter UPI ID (e.g., yourname@upi)"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
            />
          )}
          {paymentMethod === "card" && (
            <>
              <input
                type="text"
                placeholder="Card Number"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
              />
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-1/2 px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
                />
                <input
                  type="password"
                  placeholder="CVV"
                  className="w-1/2 px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
                />
              </div>
            </>
          )}
          {paymentMethod === "netbanking" && (
            <select
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled>Select Your Bank</option>
              <option>SBI</option>
              <option>HDFC</option>
              <option>ICICI</option>
              <option>Axis</option>
            </select>
          )}
        </div>

        <div className="mt-6 text-center">
          <p className="text-lg mb-2">Total Payable:</p>
          <h2 className="text-2xl font-bold text-green-400 mb-4">${totalAmount.toFixed(2)}</h2>

          <button
            onClick={handlePayment}
            disabled={isPaying}
            className={`w-full bg-[#f42c37] py-3 rounded-full font-semibold text-lg transition-transform duration-300 ${
              isPaying ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
            }`}
          >
            {isPaying ? "Processing..." : `Pay Now`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;