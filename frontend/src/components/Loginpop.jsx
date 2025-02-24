import React, { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext.jsx";
import crossicon from "../assets/profile-pictures/cross_icon.png"
import axios from "axios";

const Loginpop = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    newUrl += currState === "Login" ? "/api/user/login" : "/api/user/register";
    
    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
      <form onSubmit={onLogin} className="bg-gray-900 text-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={crossicon}
            alt="Close"
            className="w-6 h-6 cursor-pointer"
          />
        </div>

        <div className="space-y-4">
          {currState === "Sign Up" && (
            <input
              type="text"
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              placeholder="Your Name"
              className="w-full p-3 bg-gray-800 rounded text-white outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          )}

          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-gray-800 rounded text-white outline-none focus:ring-2 focus:ring-orange-500"
            required
          />

          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Your Password"
            className="w-full p-3 bg-gray-800 rounded text-white outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full mt-6 p-3 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded transition duration-200"
        >
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <div className="flex items-center space-x-2 mt-4">
          <input type="checkbox" required className="accent-orange-500" />
          <p className="text-sm text-gray-400">
            By continuing, I agree to the{" "}
            <span className="text-orange-500 cursor-pointer">Terms of Use</span> &{" "}
            <span className="text-orange-500 cursor-pointer">Privacy Policy</span>.
          </p>
        </div>

        {currState === "Login" ? (
          <p className="text-center text-gray-400 mt-4">
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")} className="text-orange-500 cursor-pointer">
              Click here
            </span>
          </p>
        ) : (
          <p className="text-center text-gray-400 mt-4">
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")} className="text-orange-500 cursor-pointer">
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Loginpop;
