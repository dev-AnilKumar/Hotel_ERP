import React from 'react'

const SingleProductPage = ({ loading, error, item, qty, setQty, addToCartHandler }) => {
    return (
        <div className="p-6">
            {/* {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : ( */}
            <div className="op">
                <div className="flex flex-wrap gap-6">
                    {/* Left Section: Image and Description */}
                    <div className="w-full md:w-7/12">
                        <img
                            src={item.imgSrc}
                            alt={item.itemName}
                            className="w-full h-auto rounded-md mb-6"
                        />
                        <div className="text-center mb-4">
                            <h6 className="text-gray-500">Shangri-La Colombo</h6>
                            <h1 className="text-3xl font-semibold">{item.itemName}</h1>
                        </div>
                        <hr className="my-4" />
                        <h6 className="text-lg font-semibold">LKR {item.itemPrice}.00</h6>
                        <h6 className="text-md font-medium mt-4">About the Item</h6>
                        <p>{item.description}</p>
                    </div>

                    {/* Right Section: Add to Cart */}
                    <div className="w-full md:w-5/12">
                        <h4 className="text-lg font-semibold mb-4">ADD TO CART</h4>
                        <div className="bg-white shadow-lg rounded-md p-4">
                            <div className="flex justify-between mb-3">
                                <span>Category:</span>
                                <strong>{item.category}</strong>
                            </div>
                            <div className="flex justify-between mb-3">
                                <span>Price:</span>
                                <strong>LKR {item.itemPrice}.00</strong>
                            </div>
                            <div className="flex justify-between mb-3">
                                <span>Qty</span>
                                <input
                                    type="number"
                                    placeholder="Enter quantity"
                                    value={qty}
                                    onChange={(e) => setQty(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md p-2"
                                />
                            </div>
                            <button
                                onClick={addToCartHandler}
                                className="w-full bg-yellow-400 text-white font-semibold py-2 rounded-md hover:bg-yellow-500"
                            >
                                Add To Cart
                            </button>
                        </div>
                        <hr className="my-4" />
                        <p className="font-semibold">Phone: (+94) 11 788 8288</p>
                        <p className="font-semibold">Email: restaurants.slcb@juice.com</p>
                    </div>
                </div>
            </div>
            {/* )} */}
        </div>
    );
};

export default SingleProductPage