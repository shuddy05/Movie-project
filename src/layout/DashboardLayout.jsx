import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../assets/logo.svg";
import profilePicture from "../assets/Oval.svg";
import { NavLink } from "react-router-dom";
import { FaThLarge } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { RiFilmFill } from "react-icons/ri";
import { IoMdVideocam } from "react-icons/io";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SearchInput from "../components/SearchInput";
const DashboardLayout = () => {
  return (
    <div className="  flex flex-col lg:flex-row gap-[36px] p-6 lg:p-5 max-w-[1240px]  ">
      <div>
        {" "}
        <Sidebar />{" "}
      </div>

      <div className="p-0 lg:p-4 w-full ">
        <SearchInput />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
