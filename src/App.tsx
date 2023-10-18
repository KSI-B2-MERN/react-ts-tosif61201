import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const onUsernameChange = (username: string) => {
    console.log(username);
  };
  const onPasswordChange = (password: String) => {
    console.log(password);
  };

  return (
    <>
      <div className=" bg-slate-600 w-screen h-screen flex justify-center items-center ">
        <div className="w-1/5 h-auto flex flex-col justify-center  bg-slate-400 p-3 rounded-md ">
          <h2 className="text-lg font-bold text-blue-700">Login Form</h2>
          <div className="  h-14 w-1/2 p-2 flex flex-col ml-16 mt-3 ">
            <img
              src="https://knowledge.tech/assets/i/KnowledgeImages/logo.png"
              alt="Knowledge Stream"
              className="rounded-md"
            />
          </div>

          <div className=" flex flex-col items-start m-1">
            <label className="text-black-500">UserName</label>
            <input
              className="border-solid border-2 border-gray-500 rounded-md px-1"
              type="text"
              placeholder="Your Name"
              required
              onChange={(e) => {
                onUsernameChange(e.target.value);
              }}
            />
            <label className="text-black-500">Password</label>
            <input
              className="border-2 border-gray-500 rounded-md px-1"
              type="password"
              required
              onChange={(e) => {
                onPasswordChange(e.target.value);
              }}
            />
          </div>
          <div className="flex w-full  flex-col items-center my-2 ">
            <button className="font-bold text-blue-700 ">Log In</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
