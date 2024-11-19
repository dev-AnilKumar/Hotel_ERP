
import React from 'react';
import { Link } from 'react-router-dom';
// import Message from './Message'; // Assume your Message component exists

const ShoppingCart = ({ cartItems, removeFromCartHandler, addToCart, checkoutHandler }) => {
  return (
    <div className="container mx-auto p-6">
      <div className="op" data-aos="zoom-in">
        <div className="flex flex-wrap gap-6">
          {/* Left Column: Cart Items */}
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl font-semibold mb-6">SHOPPING CART</h1>
            {cartItems?.length === 0 ? (
              <div>
                <p> Your cart is empty </p> <br />
                <Link to="/">Go Back</Link>
              </div>
              // <Message>
              // </Message>
            ) : (
              <div className="space-y-6">
                {cartItems?.map((item) => (
                  <div key={item.food} className="flex items-center justify-between bg-white shadow-lg rounded-md p-4">
                    <div className="flex items-center space-x-4">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                      <Link to={`/product/${item.food}`} className="text-lg font-medium text-blue-600 hover:text-blue-800">
                        {item.name}
                      </Link>
                    </div>
                    <div className="text-lg font-medium">LKR {item.price}</div>
                    <div className="flex items-center space-x-4">
                      <input
                        type="number"
                        value={item.qty}
                        onChange={(e) => addToCart(item.food, Number(e.target.value))}
                        className="w-20 p-2 border rounded-md text-center"
                      />
                      <button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(item.food)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Subtotal and Checkout */}
          <div className="w-full md:w-1/3">
            <div className="bg-white shadow-lg rounded-md p-6">
              <div className="mb-6">
                <h2 className="text-xl font-semibold">
                  Subtotal (
                  {cartItems?.reduce((acc, item) => acc + item.qty, 0)})
                  items
                </h2>
                <h5 className="text-2xl font-bold">
                  LKR{" "}
                  {cartItems
                    ?.reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}
                </h5>
              </div>
              <div>
                <button
                  type="button"
                  className="w-full py-2 text-lg text-white bg-yellow-400 hover:bg-yellow-500"
                  disabled={cartItems?.length === 0}
                  onClick={checkoutHandler}
                >
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default ShoppingCart;