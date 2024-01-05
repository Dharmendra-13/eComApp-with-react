import React, { useEffect, useState } from "react";
import arr from "./arr";
import Items from "../components/Items";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";
import Footer from "./../components/Footer";
const Home = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const addHandler = (value) => {
    dispatch(add(value));
    // localStorage.setItem("cart", JSON.stringify(value));
  };

  const removeHandler = (index) => {
    dispatch(remove(index));
  };

  useEffect(() => {
    setProducts(arr);
  }, []);

  return (
    <>
      <div className="w-full h-40">
        <img
          className="w-full h-40 bg-cover"
          style={{
            backgroundImage: `url("https://rukminim2.flixcart.com/fk-p-flap/844/140/image/a23eb51f83cca4e0.jpg?q=50")`,
          }}
        />
      </div>
      <div className="w-full min-h-20">
        <h1 className="text-xl text-black font-semibold py-4 px-2">
          Realme smartphones
        </h1>
        <div className="w-full min-h-20 border-zinc border flex flex-wrap justify-evenly items-center">
          {products.map((item, index) => (
            <>
              <Items
                key={item.id}
                image={item.imageurl}
                description={item.description}
                price={item.price}
                removeHandler={removeHandler}
                addHandler={addHandler}
                index={index}
                value={item}
              />
            </>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
