import React from "react";
import { useState, useEffect } from "react";
import { RiFilmFill } from "react-icons/ri";
import { IoBookmarkOutline } from "react-icons/io5";
import { FadeLoader } from "react-spinners";
import { GoDotFill } from "react-icons/go";
import Play from "../assets/playbutton.svg";
const url =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const MovieComponent = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const getData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setResults(data.results.slice(2, 40));
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  if (isLoading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <FadeLoader className="" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start gap-[15px] md:gap-x-[29px] lg:gap-x-[40px] ">
      {results.map((movie, index) => {
        const { poster_path, title, release_date } = movie;

        const releasedYear = new Date(release_date).getFullYear();

        return (
          <div
            key={index}
            className=" w-full h-[154px] md:h-[192px]  lg:h-[226px]  "
          >
            <div className="relative group">
              <img
                src={IMG_PATH + poster_path}
                alt=""
                className="object-cover object-center  w-full h-[110px] rounded-[8px]"
              />
              <div className="absolute inset-0  flex justify-center items-center bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 ">
                <button className="flex justify-center items-center gap-2 cursor-pointer bg-white/25 text-[18px] w-[117px] h-[48px] rounded-[28px] ">
                  <img src={Play} alt="" />
                  Play
                </button>
              </div>

              <div className="absolute right-[8px] top-[8px]  md:right-[8px] md:top-[8px] bg-[#10141e] hover:bg-white hover:text-black w-[32px] h-[32px] rounded-full flex items-center justify-center ">
                <IoBookmarkOutline />
              </div>
            </div>
            <div className=" mt-2   text-white ">
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
  );
};

export default MovieComponent;
