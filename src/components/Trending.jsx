import React from "react";
import { useState, useEffect } from "react";
import { RiFilmFill } from "react-icons/ri";
import { IoBookmarkOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import Play from "../assets/playbutton.svg";
const url =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const Trending = () => {
  const [results, setResults] = useState([]);

  const getData = async () => {
    const res = await fetch(url);
    const data = await res.json();

    const datA = data.results.slice(2, 8);

    setResults(datA);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1 className=" text-[20px] md:text-[32px] mb-[16px] md:mb-[25px] ">
        Trending
      </h1>
      <div className="flex justify-between gap-[16px] md:gap-[40px] overflow-x-auto  ">
        {results.map((movie, index) => {
          const { poster_path, title, release_date } = movie;
          const releasedYear = new Date().getFullYear(release_date);

          return (
            <div
              key={index}
              style={{ backgroundImage: `url(${IMG_PATH + poster_path})` }}
              className="relative group min-w-[240px] h-[140px] md:h-[230px]  md:min-w-[470px] bg-cover bg-center rounded-lg px-[24px] py-[16px] "
            >
              <div className="absolute inset-0  flex justify-center items-center bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 ">
                <button className="flex justify-center items-center gap-2 cursor-pointer bg-white/25 text-[18px] w-[117px] h-[48px] rounded-[28px] ">
                  <img src={Play} alt="" />
                  Play
                </button>
              </div>
              <div className="absolute right-[24px] top-[16px] bg-[#10141e] hover:bg-white hover:text-black w-[32px] h-[32px] rounded-full flex items-center justify-center ">
                <IoBookmarkOutline />
              </div>
              <div className="absolute bottom-[24px]   text-white ">
                <div className=" flex  items-center gap-0.5  text-[12px] md:text-[15px] opacity-70 ">
                  <p>{releasedYear}</p>
                  <GoDotFill />
                  <div className="flex items-center gap-0.5 ">
                    <RiFilmFill />
                    <p>Movie</p>
                  </div>
                  <GoDotFill />
                  <p>PG</p>
                </div>
                <h1 className="text-[15px] md:text-[24px]">{title}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
