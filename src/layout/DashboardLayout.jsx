import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../assets/logo.svg";
import profilePicture from "../assets/Oval.svg";
import Lens from "../assets/Shape.svg";
import { NavLink } from "react-router-dom";
import { FaThLarge } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { RiFilmFill } from "react-icons/ri";
import { IoMdVideocam } from "react-icons/io";
import { Link } from "react-router-dom";
const DashboardLayout = () => {
  return (
    <main>
      <div className="layout flex flex-col lg:flex-row gap-[36px]  ">
        <div className=" hidden lg:flex lg:flex-col justify-between  lg:max-w-[96px] lg:h-[960px] bg-[#161D2F] rounded-[20px] py-[35px] px-[32px] ">
          <div className=" flex lg:flex-col gap-[74px] justify-between items-center">
            <Link to="/">
              {" "}
              <img src={Logo} alt="logo" />{" "}
            </Link>
            <div className="flex lg:flex-col justify-between gap-[40px]  ">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-[#5a698f]"
                }
                to="/"
              >
                <FaThLarge size={20} className="hover:text-[#FC4747]" />
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-[#5a698f]"
                }
                to="/movies"
              >
                {" "}
                <RiFilmFill size={20} className=" hover:text-[#FC4747]" />{" "}
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-[#5a698f]"
                }
                to="/tv-series"
              >
                {" "}
                <IoMdVideocam size={20} className=" hover:text-[#FC4747]" />
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-[#5a698f]"
                }
                to="/bookmarked"
              >
                <FaBookmark size={20} className=" hover:text-[#FC4747]" />
              </NavLink>
            </div>
          </div>
          <img src={profilePicture} alt="Profile picture" />
        </div>
        <div className=" flex lg:hidden justify-between  w-full lg:max-w-[96px] lg:h-[960px] bg-[#161D2F] rounded-[20px] p-3 md:py-[35px] md:px-[32px] ">
          <img src={Logo} alt="logo" />
          <div className=" flex lg:flex-col md:gap-[74px] justify-between items-center">
            <div className="flex lg:flex-col justify-between gap-[24px] md:gap-[40px] ">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-[#5a698f]"
                }
                to="/"
              >
                <FaThLarge size={20} className="hover:text-[#FC4747]" />
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-[#5a698f]"
                }
                to="/movies"
              >
                {" "}
                <RiFilmFill size={20} className=" hover:text-[#FC4747]" />{" "}
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-[#5a698f]"
                }
                to="/tv-series"
              >
                {" "}
                <IoMdVideocam size={20} className=" hover:text-[#FC4747]" />
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-[#5a698f]"
                }
                to="/bookmarked"
              >
                <FaBookmark size={20} className=" hover:text-[#FC4747]" />
              </NavLink>
            </div>
          </div>
          <img src={profilePicture} alt="Profile picture" />
        </div>
        <div>
          <form className="max-w-[381px] flex gap-[24px] mb-[34px]   ">
            <img src={Lens} alt="" />
            <input
              type="text"
              placeholder="Search for movie or Tv series"
              className="focus:outline-none"
            />
          </form>
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
