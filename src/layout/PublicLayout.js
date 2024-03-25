import { useNavigate } from "react-router-dom";
import logo from "../logo.svg";
const PublicLayout = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="ml-16 mr-16 mt-4">
      <div className="bg-purple-700 h-3"></div>
      <div className="bg-white m-auto px-6 flex flex-row justify-between rounded-b-lg">
        <img src={logo} />
          <nav className="flex space-x-4 items-center ">
            <button className="text-lg font-medium hover:text-indigo-700" onClick={() => navigate("/")}>
              Assistant
            </button>
            <button
              className="text-lg font-medium hover:text-indigo-700"
              onClick={() => navigate("/phone")}
            >
              Phone
            </button>
            <button className="text-lg font-medium hover:text-indigo-700" onClick={() => navigate("/bound")}>
              Set Bound
            </button>
            <button className="text-lg font-medium hover:text-indigo-700" onClick={() => navigate("/call")}>
              Call logs
            </button>
            <button
              className="text-lg font-medium hover:text-indigo-700"
              onClick={() => navigate("/voice")}
            >
              Voice
            </button>
            <button
              className="text-2xl bg-indigo-700 w-10 h-10 rounded-3xl hover:bg-indigo-500 "
              onClick={() => navigate("/profile")}
            >
              <p className="m-1 font-medium text-white">A</p>
            </button>
          </nav>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default PublicLayout;
