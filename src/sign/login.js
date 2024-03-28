import React, { useEffect, useState } from "react";
// import Logo from "../assets/logo.png";
import GoogleSvg from "../assets/img/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("auth"));
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;

    if (email.length > 0 && password.length > 0) {
      const formData = {
        email,
        password,
      };
      try {
        const response = await axios.post(
          "http://217.196.48.146:8000/api/user/login",
          formData
        );
        localStorage.setItem("auth", response.data.token);
        toast.success("Login successfull");
        navigate("/assistant");
      } catch (err) {
        console.log(err);
        toast.error(err.message);
      }
    } else {
      toast.error("Please fill all inputs");
    }
  };

  useEffect(() => {
    if (token !== null) {
      toast.success("You already logged in");
      navigate("/assistant");
    }
  }, []);

  return (
    <div className="flex justify-center backdrop-blur-lg mt-[80px]">
      <div className="w-[500px] h-screen">
        <div className="w-4/5 mx-auto h-full flex flex-col justify-center">
          <div className="border-2 p-8 rounded-lg shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl">Welcome back!</h2>
              <p>Please enter your details</p>
            </div>
            <form onSubmit={handleLoginSubmit}>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="w-full p-4 mb-4 border-b-2 border-black outline-none"
              />
              <div className="relative mb-4">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  className="w-full p-4 border-b-2 border-black outline-none"
                />
                <button
                  type="button"
                  className="absolute right-0 bottom-4"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember-checkbox"
                    className="mr-2"
                  />
                  <label htmlFor="remember-checkbox">
                    Remember for 30 days
                  </label>
                </div>
                <a href="#" className="text-sm hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="flex flex-col gap-4">
                <button
                  type="submit"
                  className="py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition duration-300"
                >
                  Log In
                </button>
                {/* <button
                  type="submit"
                  className="py-4 bg-gray-200 flex items-center justify-center gap-2 hover:bg-gray-300 transition duration-300"
                >
                  <img src={GoogleSvg} alt="" className="w-6" />
                  Log In with Google
                </button> */}
              </div>
            </form>
            <p className="text-center mt-8">
              Don't have an account?{" "}
              <Link to="/signup" className="font-semibold hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
