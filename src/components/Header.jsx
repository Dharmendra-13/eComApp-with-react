import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const items = useSelector((state) => state.cart);
  const product = localStorage.getItem("cart");
  const logoutHandler = () => {
    location.reload();
  };
  return (
    <>
      {/* searching Header */}
      <div className="w-full h-14 bg-blue-500 flex justify-evenly items-center">
        <div className="text-xl text-white font-medium">eComApp</div>
        <div className="border-none w-1/3 flex items-center bg-white rounded">
          <input
            className="w-full p-1 outline-0 placeholder:text-slate-400"
            type="text"
            placeholder="Search for products,brand and more"
          />
          <span className="text-white-500 p-2 text-lg ring-slate-500">
            <FaSearch />
          </span>
        </div>
        <div className="flex justify-between items-center text-white w-1/4 font-semibold list-none">
          <li className="flex">
            <Link to="my-account">My Account</Link>
            <span className="text-2xl text-white">
              <RiArrowDropDownLine />
            </span>
          </li>
          <li className="flex justify-between items-center text-white ">
            <div className="mx-2 text-2xl relative">
              <span className="border-1 border-red-white absolute text-sm bg-red-400  w-5 h-5 rounded-lg ms-3 mb-5 flex justify-center items-center">
                <span>{items.length}</span>
                {/* <span>{product.length}</span> */}
              </span>
              <span>
                <Link to="cart">
                  {" "}
                  <IoCart />
                </Link>
              </span>
            </div>

            <Link to="cart">Cart</Link>
          </li>
          {items.length > 0 ? (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          ) : (
            <>
              <li>
                <Link to="login">Login</Link>
              </li>
              <li>
                <Link to="register">Signup</Link>
              </li>
            </>
          )}
        </div>
      </div>
      {/* navigation bar */}
      <div className="w-full h-10 shadow-md flex justify-evenly items-center font-medium	">
        <div className="flex">
          <Link to="electronics"> Electronics</Link>
          <span className="text-2xl text-gray-500">
            <RiArrowDropDownLine />
          </span>
        </div>
        <div className="flex">
          <Link to="tv-appliance">TVs&Appliances</Link>
          <span className="text-2xl text-gray-500">
            <RiArrowDropDownLine />
          </span>
        </div>
        <div className="flex">
          <Link to="men"> Men</Link>
          <span className="text-2xl text-gray-500">
            <RiArrowDropDownLine />
          </span>
        </div>
        <div className="flex">
          <Link to="women">Women</Link>
          <span className="text-2xl text-gray-500">
            <RiArrowDropDownLine />
          </span>
        </div>
        <div className="flex">
          <Link to="baby-kids">Baby&Kids</Link>
          <span className="text-2xl text-gray-500">
            <RiArrowDropDownLine />
          </span>
        </div>
        <div className="flex">
          <Link to="home-furniture"> Home&Furniture</Link>
          <span className="text-2xl text-gray-500">
            <RiArrowDropDownLine />
          </span>
        </div>
        <div className="flex">
          <Link to="sports-more">Sports,Books&more</Link>
          <span className="text-2xl text-gray-500">
            <RiArrowDropDownLine />
          </span>
        </div>
        <div className="flex">
          <Link to="flights"> Flights</Link>
          <span className="text-2xl text-gray-500">
            <RiArrowDropDownLine />
          </span>
        </div>
      </div>
      {/* hero section  */}
    </>
  );
};

export default Header;
