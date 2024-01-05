import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove, incrementCart, decrementCart } from "../store/cartSlice";
import Footer from "../components/Footer";
const Cart = () => {
  // get cart Items from the local storage
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
  }, []);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const discount = 20;
  const subTotal = products.reduce((accumulator, product) => {
    return product.price * product.items + accumulator;
  }, 0);

  return (
    <>
      <h1 className="text-xl font-semibold text-center mt-4 mb-6">
        Your Cart have <span> {products.length} </span> items
      </h1>
      <div className="w-full h-22 shadow-md pb-4 flex justify-evenly items-center text-xl">
        <h1>Item</h1>
        <div className="flex justify-evenly items-center w-2/3">
          <h1>Price</h1>
          <h1>Quantity</h1>
          <h1>Total</h1>
        </div>
      </div>
      <div className="min-w-96 min-h-40 pb-4 text-xl">
        {products.map((item, index) => (
          <>
            <div className="w-96 h-36 inline-block mt-4 ms-2" key={index}>
              <img
                className="w-88 h-32 mt-2 bg-contains inline-block"
                src={item.imageurl}
                alt="image"
              />
              <p className="inline-block ms-2">{item.description}</p>
            </div>
            <div className="w-1/2 h-36 inline-block ms-16">
              <div className="flex justify-between items-center">
                <div className="w-44 h-16 text-center">${item.price}</div>
                <div className="border-2 border-zinc-500 w-44 h-10 flex justify-between text-2xl items-stretch mb-7">
                  <button
                    onClick={() => {
                      dispatch(decrementCart(item.id));
                    }}
                    className="border-r-2 border-zinc-500 px-5"
                    disabled={item.items === 1}
                  >
                    -
                  </button>
                  <button className="px-4">{item.items}</button>
                  <button
                    onClick={() => {
                      dispatch(incrementCart(item.id));
                    }}
                    className="border-l-2 border-zinc-500 px-5"
                  >
                    +
                  </button>
                </div>
                <div className="w-44 h-16 flex justify-between">
                  <div> ${item.price * item.items}</div>
                  <button
                    onClick={() => dispatch(remove(item.id))}
                    className="bg-black text-white w-20 h-10 rounded text-center text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      {/* Grand total */}
      <div className="w-2/3 h-96 m-auto flex justify-end">
        <div className="w-96 h-80">
          <div className="flex justify-between border-b-2 border-zinc-100 text-black p-2 font-semibold">
            <p>SubTotal</p>
            <p>${subTotal}</p>
          </div>
          <div className="flex justify-between border-b-2 border-zinc-100 p-2 font-semibold">
            <p>Sales Tax</p>
            <p>
              {products.length !== 0 ? discount : 0}
              {products.length !== 0 && "%"}
            </p>
          </div>
          <div className="flex justify-between border-b-2 border-zinc-100 p-2 font-semibold">
            <p>Coupan Code</p>
            <p>Add coupan</p>
          </div>
          <div className="flex justify-between border-b-2 border-zinc-100 font-bold p-2">
            <p className="text-xl">Grand Total</p>
            <p className="text-xl">{subTotal - subTotal * (discount / 100)}</p>
          </div>
          <button className="rounded text-center w-32 py-2 px-5 mt-3 bg-black text-white font-semibold">
            Check out
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
