import React, { useState, useEffect } from "react";
import Lens from "../assets/Shape.svg";
import { useLocation } from "react-router-dom";
const SearchInput = () => {
  const [placeholder, setPlaceholder] = useState("");
  const location = useLocation().pathname;

  useEffect(() => {
    if (location === "/") {
      setPlaceholder("movies or TV series");
    } else if (location === "/movies") {
      setPlaceholder("Movies");
    } else if (location === "/tv-series") {
      setPlaceholder("Tv-series");
    } else {
      setPlaceholder("bookmarked");
    }
  }, [location]);
  return (
    <div>
      <form className=" flex gap-[24px] mb-[34px]   ">
        <img src={Lens} alt="" />
        <input
          type="text"
          placeholder={`Search for ${placeholder}`}
          className="w-full caret-[#FC4747] focus:border-b focus:outline-none focus:border-b-[#5a698f]"
        />
      </form>
    </div>
  );
};

export default SearchInput;
