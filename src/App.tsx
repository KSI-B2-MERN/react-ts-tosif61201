import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/navbar";
import SignUp from "./pages/sign-up";
import axios from "axios";

import Select from "react-select";

const roleOptions = [
  { value: "1", label: "student" },
  { value: "2", label: "teacher" },
];

function App() {
  const [fName, setFName] = useState<string>("");
  const [lName, setLName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");

  const [signup, setSignup] = useState<boolean>(false);

  const onFNameChange = (fName: string) => {
    setFName(fName);
  };
  const onLNameChange = (lName: string) => {
    setLName(lName);
  };

  const onUsernameChange = (username: string) => {
    setUsername(username);
  };
  const onPasswordChange = (password: string) => {
    setPassword(password);
  };

  const onRoleChange = (role: string) => {
    setRole(role);
  };

  const login = async () => {
    const loginRes = await axios.post("http://localhost:3000/auth/signup", {
      username: username,
      password: password,
    });

    if (loginRes.data) {
      alert("Logged in Successfuly");
    } else {
      alert("Incorrect Username/Password");
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <SignUp />
      {/* <div className=" bg-slate-300 w-screen h-screen flex justify-center items-center flex-col ">
        <h2 className="text-lg font-bold text-black-700">Login Form</h2>
        <p>Provide Your Valid Login Credentials</p>
        <div className="flex w-full justify-around"></div>
        <div className="w-1/5 h-auto flex flex-col justify-center  bg-slate-400 p-3 pt-10 pb-10 rounded-md ">
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
              className="border-solid border-2 border-gray-500 rounded-md px-1 w-full"
              type="text"
              placeholder="Your Name"
              required
              onChange={(e) => {
                onUsernameChange(e.target.value);
              }}
            />
            <label className="text-black-500">Password</label>
            <input
              className="border-2 border-gray-500 rounded-md px-1 w-full"
              type="password"
              required
              onChange={(e) => {
                onPasswordChange(e.target.value);
              }}
            />
            <h2 className=" font-normal text-blue-700 cursor-pointer">
              <p className="text-gray-500 ">
                Not register yet?{" "}
                <span
                  className="text-blue-700 cursor-pointer"
                  onClick={() => {
                    setSignup(true);
                  }}
                >
                  {" "}
                  SignUp
                </span>
              </p>
            </h2>
          </div>

          <div className="flex w-full  flex-col items-center my-2 ">
            <button
              className="font-bold text-blue-700 "
              onClick={() => {
                void login();
              }}
            >
              Log In
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
