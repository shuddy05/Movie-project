import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import profilePicture from "../assets/Oval.svg";
import { NavLink } from "react-router-dom";
import { FaThLarge } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { RiFilmFill } from "react-icons/ri";
import { IoMdVideocam } from "react-icons/io";
const Sidebar = () => {
  const links = [
    {
      id: 1,
      to: "/",
      content: <FaThLarge size={20} className="hover:text-[#FC4747]" />,
      title: "dashboard home",
    },
    {
      id: 2,
      to: "movies",
      content: <RiFilmFill size={20} className="hover:text-[#FC4747]" />,
      title: "dashboard home",
    },
    {
      id: 3,
      to: "tv-series",
      content: <IoMdVideocam size={20} className="hover:text-[#FC4747]" />,
      title: "dashboard home",
    },
    {
      id: 4,
      to: "bookmarked",
      content: <FaBookmark size={20} className="hover:text-[#FC4747]" />,
      title: "dashboard home",
    },
  ];
  return (
    <div>
      <div className=" hidden lg:flex sticky top-0   max-w-[96px] h-[960px] bg-[#161D2F] rounded-[20px] py-[35px] px-[32px] ">
        <div className="flex flex-col justify-between ">
          <div className="flex flex-col gap-[74px] items-center">
            <NavLink to="/">
              <img src={Logo} alt="logo" />{" "}
            </NavLink>
            <div className="flex lg:flex-col gap-[40px]   ">
              {links.map((link) => {
                const { id, title, to, content } = link;
                return (
                  <NavLink
                    key={id}
                    to={to}
                    className={({ isActive }) =>
                      isActive ? "text-white" : "text-[#5a698f]"
                    }
                    end={id === 1}
                    title={title}
                  >
                    {content}
                  </NavLink>
                );
              })}
            </div>
          </div>
          <img src={profilePicture} alt="Profile picture" />
        </div>
      </div>

      <div className=" sticky top-0 flex lg:hidden justify-between items-center w-full bg-[#161D2F] p-3 md:py-[35px] md:px-[32px] ">
        <img src={Logo} alt="logo" />
        <div className="flex lg:flex-col justify-between gap-[32px] md:gap-[40px]   ">
          {links.map((link) => {
            const { id, title, to, content } = link;
            return (
              <NavLink
                key={id}
                to={to}
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-[#5a698f]"
                }
                end={id === 1}
                title={title}
              >
                {content}
              </NavLink>
            );
          })}
        </div>
        <img src={profilePicture} alt="Profile picture" />
      </div>
    </div>
  );
};

export default Sidebar;
