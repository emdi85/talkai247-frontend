import React from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CreateAssistant } from "./features/assistant/createAssistant/CreateAssistant";
import GetPhone from "./features/phone/getPhone";
import UsePhone from "./features/phone/usePhone";
import PublicLayout from "./layout/PublicLayout";
import Signup from "./sign/signup";
import Login from "./sign/login";
import Logout from "./sign/logout";

// const Home = () => {
//   window.location.href = "https://talkai247.online"
//   return <></>
// }

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <PublicLayout />
      <div>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/assistant" element={<CreateAssistant />} />
          <Route path="/phone" element={<GetPhone />} />
          <Route path="/bound" element={<UsePhone />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          {/* <Route path="/" element={<Home/> } /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
