import React, { useEffect, useState } from "react";
import GoogleSvg from "../assets/img/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let lastname = e.target.lastname.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    let confirmPassword = e.target.confirmPassword.value;
    let phone = e.target.phone.value;

    if (
      name.length > 0 &&
      lastname.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0 &&
      phone.length > 0
    ) {
      if (password === confirmPassword) {
        const formData = {
          firstName: name,
          lastName: lastname,
          email,
          phone,
          password,
        };
        try {
          const response = await axios.post(
            `${process.env.REACT_APP_SERVER_URL}/api/user/register`,
            formData
          );
          toast.success("Registration successful");
          navigate("/login");
        } catch (err) {
          toast.error(err.message);
        }
      } else {
        toast.error("Passwords don't match");
      }
    } else {
      toast.error("Please fill all inputs");
    }
  };

  return (
    <div className="flex justify-center backdrop-blur-lg mt-[80px]">
      <div className="w-[500px] h-screen">
        <div className="w-4/5 mx-auto h-full flex flex-col justify-center">
          <div className="border-2 p-8 rounded-lg shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl">Welcome to our website!</h2>
              <p>Please enter your details</p>
            </div>
            <form onSubmit={handleRegisterSubmit}>
              <input
                type="text"
                placeholder="Name"
                name="name"
                required={true}
                className="w-full p-4 mb-4 border-b-2 border-black outline-none"
              />
              <input
                type="text"
                placeholder="Lastname"
                name="lastname"
                required={true}
                className="w-full p-4 mb-4 border-b-2 border-black outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                required={true}
                className="w-full p-4 mb-4 border-b-2 border-black outline-none"
              />
              <input
                type="number"
                placeholder="Phone Number"
                name="phone"
                required={true}
                className="w-full p-4 mb-4 border-b-2 border-black outline-none"
              />
              <div className="relative mb-4">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  required={true}
                  className="w-full p-4 mb-4 border-b-2 border-black outline-none"
                />
                <button
                  type="button"
                  className="absolute right-0 bottom-4 mr-4 mb-4"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="relative mb-4">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  required={true}
                  className="w-full p-4 mb-4 border-b-2 border-black outline-none"
                />
                <button
                  type="button"
                  className="absolute right-0 bottom-4 mr-4 mb-4"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <button
                  type="submit"
                  className="py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition duration-300"
                >
                  Sign Up
                </button>
                {/* <button
                  type="submit"
                  className="py-4 bg-gray-200 flex justify-center items-center rounded-full font-semibold hover:bg-gray-300 transition duration-300"
                >
                  <img src={GoogleSvg} alt="" className="w-6 mr-2" />
                  Sign Up with Google
                </button> */}
              </div>
            </form>
            <p className="text-center mt-8">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
