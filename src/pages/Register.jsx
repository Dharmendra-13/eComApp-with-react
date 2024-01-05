import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <>
      <div className="w-96 h-96 shadow-xl border-2 border-zinc-100 flex flex-col items-center rounded mt-5 m-auto">
        <h1 className="font-bold text-2xl mt-2">Sign Up Account</h1>
        <form onSubmit={submitHandler} className="flex flex-col p-5">
          <input
            className="border-2 border-zinc-200 px-7 py-2 m-2 outline-none rounded text-lg"
            autoComplete="on"
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Username"
            required
          />
          <input
            className="border-2 border-zinc-200 px-7 py-2 m-2 outline-none rounded text-lg"
            autoComplete="on"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email Address"
            required
          />
          <input
            className="border-2 border-zinc-200 px-7 py-2 m-2 outline-none rounded text-lg"
            autoComplete="on"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            required
          />
          <button className="bg-green-500 font-bold text-xl py-2 rounded mt-2 text-white w-32 ml-2">
            Sign Up
          </button>
        </form>

        <p className="font-medium">
          * If you already Registered{" ? "}
          <Link className="text-blue-500" to="/login">
            Please Login
          </Link>
        </p>
      </div>
    </>
  );
};

export default Register;
