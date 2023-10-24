import axios from "axios";

function Navbar() {
  return (
    <>
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
    </>
  );
}

export default Navbar;
