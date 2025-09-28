import React from "react";
import { Link } from "react-router-dom";
const Error404 = () => {
  return (
    <main className=" text-white h-screen flex justify-center items-center ">
      <div className="layout text-center  ">
        <h1 className="text-7xl mb-3">OOOps!!</h1>
        <h1 className="text-4xl mb-3">404-Page Not Found</h1>
        <Link to="/">
          <button
            type="button"
            className="bg-white text-[#161D2F] p-3 rounded-2xl cursor-pointer "
          >
            {" "}
            GO TO HOMEPAGE
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Error404;
