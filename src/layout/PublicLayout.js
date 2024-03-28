import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../logo.svg";
import { useState } from "react";
import { TfiClose } from "react-icons/tfi";
const PublicLayout = ({ children }) => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="ml-16 mr-16 mt-4 ">
      <div className="bg-purple-700 h-3"></div>
      <div className="relative bg-white m-auto px-6 flex flex-row justify-between rounded-b-lg">
        <img src={logo} />
        <nav className="flex space-x-4 items-center hidden md:flex">
          <button
            className="text-lg font-medium hover:text-indigo-700"
            onClick={() => navigate("/assistant")}
          >
            Assistant
          </button>
          <button
            className="text-lg font-medium hover:text-indigo-700"
            onClick={() => navigate("/phone")}
          >
            Phone
          </button>
          <button
            className="text-lg font-medium hover:text-indigo-700"
            onClick={() => navigate("/bound")}
          >
            Set Bound
          </button>
          <button
            className="text-lg font-medium hover:text-indigo-700"
            onClick={() => navigate("/call")}
          >
            Call logs
          </button>
          <button
            className="text-lg font-medium hover:text-indigo-700"
            onClick={() => navigate("/voice")}
          >
            Voice
          </button>
          <button
            className="text-lg font-medium hover:text-indigo-700"
            onClick={() => navigate("/logout")}
          >
            Log Out
          </button>
          <button
            className="text-2xl bg-indigo-700 w-10 h-10 rounded-3xl hover:bg-indigo-500 "
            onClick={() => navigate("/profile")}
          >
            <p className="m-1 font-medium text-white">A</p>
          </button>
          
        </nav>
        <button
          className="text-3xl items-center font-medium hover:text-indigo-700 flex md:hidden"
          onClick={handleClick}
        >
          {!click ? <RxHamburgerMenu /> : <TfiClose className="text-2xl" />}
        </button>
        <nav
          className={
            click
              ? "absolute flex space-x-4 items-center flex md:hidden flex-col bg-white gap-4 z-10 w-full top-[67px] right-0"
              : "absolute hidden"
          }
        >
          <button
            className="text-lg font-medium hover:text-indigo-700 w-full text-center "
            onClick={() => {
              navigate("/assistant");
              setClick(false);
            }}
          >
            Assistant
          </button>
          <button
            className="text-lg font-medium hover:text-indigo-700 w-full text-center"
            onClick={() => {
              navigate("/phone");
              setClick(false);
            }}
          >
            Phone
          </button>
          <button
            className="text-lg font-medium hover:text-indigo-700 w-full text-center"
            onClick={() => {
              navigate("/bound");
              setClick(false);
            }}
          >
            Set Bound
          </button>
          <button
            className="text-lg font-medium hover:text-indigo-700 w-full text-center"
            onClick={() => {
              navigate("/call");
              setClick(false);
            }}
          >
            Call logs
          </button>
          <button
            className="text-lg font-medium hover:text-indigo-700 w-full text-center"
            onClick={() => {
              navigate("/voice");
              setClick(false);
            }}
          >
            Voice
          </button>
          <button
            className="text-lg font-medium hover:text-indigo-700 w-full text-center"
            onClick={() => {
              navigate("/profile");
              setClick(false);
            }}
          >
            Profile
          </button>
          <button
            className="text-lg font-medium hover:text-indigo-700 w-full text-center"
            onClick={() => {
              navigate("/logout");
              setClick(false);
            }}
          >
            Log out
          </button>
        </nav>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default PublicLayout;
