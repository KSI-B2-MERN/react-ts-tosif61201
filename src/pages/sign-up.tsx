import axios from "axios";
import { useState } from "react";

import Select from "react-select";

const roleOptions = [
  { value: "1", label: "student" },
  { value: "2", label: "teacher" },
];

function SignUp() {
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

  const signUp = async () => {
    const loginRes = await axios.post("http://localhost:3000/auth/signup", {
      fName: fName,
      lName: lName,
      username: username,
      password: password,
      role: role,
    });
    if (loginRes.data) {
      alert("logged in successfuly");
    } else {
      alert("incorrect username/password");
    }
  };

  return (
    <>
      {signup ? (
        <>
          {/* navbar start */}
          <div className="w-full h-12 bg-blue-600 flex absolute">
            <div className="w-1/2 h-full flex items-center pl-2">
              <img
                src="https://knowledge.tech/assets/i/KnowledgeImages/logo.png"
                alt=""
                className=" rounded-md"
              />
            </div>
            <div className="w-1/2 h-full flex items-center  justify-end pr-2">
              <p className=" bg-white text-blue-500 font-normal text-xl p-1 px-4 rounded-md ">
                SignUp
              </p>
            </div>
          </div>
          {/* Navbar End */}
          <div className="flex w-screen h-screen bg-white justify-center items-center ">
            <div className="h-full w-1/6 flex flex-col justify-center">
              <div className="w-full flex flex-col ">
                <label className="text-gray-500">First Name</label>
                <input
                  className=" border-2   mb-2 border-gray-300 bg-white p-1 text-gray-500 rounded-md focus:outline-none"
                  required
                  placeholder="Fisrt Name"
                  type="text"
                  onChange={(e) => {
                    void onFNameChange(e.target.value);
                  }}
                />
                <label className="text-gray-500">Last Name</label>
                <input
                  className=" border-2  mb-2  border-gray-300 bg-white p-1 text-gray-500 rounded-md focus:outline-none"
                  required
                  placeholder="Last Name"
                  type="text"
                  onChange={(e) => {
                    void onLNameChange(e.target.value);
                  }}
                />
                <label className="text-gray-500">Username</label>
                <input
                  className=" border-2  mb-2  border-gray-300 bg-white p-1 text-gray-500 rounded-md focus:outline-none"
                  required
                  placeholder="your username"
                  type="text"
                  onChange={(e) => {
                    void onUsernameChange(e.target.value);
                  }}
                />
                <label className="text-gray-500 ">Password</label>
                <input
                  className=" border-2  mb-2 border-gray-300 bg-white p-1 text-gray-500 rounded-md focus:outline-none"
                  required
                  type="password"
                  onChange={(e) => {
                    void onPasswordChange(e.target.value);
                  }}
                />

                <label className="text-gray-500 ">Role</label>
                <Select
                  className="rounded-md w-64 text-gray-500  focus:outline-none"
                  isSearchable={true}
                  options={roleOptions}
                  onChange={(e) => {
                    void onRoleChange(e?.value || "");
                  }}
                  placeholder="Select Role"
                />

                <p className="text-gray-500 mt-2">
                  Back to{" "}
                  <span
                    className="text-blue-500 cursor-pointer"
                    onClick={() => {
                      setSignup(false);
                    }}
                  >
                    {" "}
                    Login Page
                  </span>
                </p>
              </div>
              <div className="w-full  flex flex-col mt-6 items-center ">
                <button
                  disabled={!(username && password && role && fName && lName)}
                  className=" border-2 py-2 px-8 rounded-md w-32 bg-blue-500 text-white disabled:bg-gray-300  focus:outline-none"
                  onClick={() => {
                    void signUp();
                  }}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* navbar start */}
          <div className="w-full h-12 bg-blue-600 flex absolute">
            <div className="w-1/2 h-full flex items-center pl-2">
              <img
                src="https://knowledge.tech/assets/i/KnowledgeImages/logo.png"
                alt=""
                className=" rounded-md"
              />
            </div>
            <div className="w-1/2 h-full flex items-center  justify-end pr-2">
              <p className=" bg-white text-blue-500 font-normal text-xl p-1 px-4 rounded-md ">
                Login
              </p>
            </div>
          </div>
          {/* Navbar End */}
          <div className="flex w-screen h-screen bg-white justify-center items-center ">
            <div className="h-full w-1/6 flex flex-col justify-center">
              <div className="w-full flex flex-col ">
                <label className="text-gray-500">Username</label>
                <input
                  className=" border-2  mb-2  border-gray-300 bg-white p-1 text-gray-500 rounded-md focus:outline-none"
                  required
                  placeholder="your username"
                  type="text"
                  onChange={(e) => {
                    void onUsernameChange(e.target.value);
                  }}
                />
                <label className="text-gray-500 ">Password</label>
                <input
                  className=" border-2  mb-2 border-gray-300 bg-white p-1 text-gray-500 rounded-md focus:outline-none"
                  required
                  type="password"
                  onChange={(e) => {
                    void onPasswordChange(e.target.value);
                  }}
                />
                <p className="text-gray-500 ">
                  Not register yet?{" "}
                  <span
                    className="text-blue-500 cursor-pointer"
                    onClick={() => {
                      setSignup(true);
                    }}
                  >
                    {" "}
                    SignUp
                  </span>
                </p>
              </div>
              <div className="w-full  flex flex-col mt-6 items-center ">
                <button
                  disabled={!(username && password)}
                  className=" border-2 py-2 px-8 rounded-md w-32 bg-blue-500 text-white disabled:bg-gray-300  focus:outline-none"
                  onClick={() => {
                    void signUp();
                  }}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default SignUp;
