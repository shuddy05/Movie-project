import React from "react";
import { useState, useEffect } from "react";
import { RiFilmFill } from "react-icons/ri";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
const url =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const BookmarkedMovies = () => {
  const [results, setResults] = useState([]);

  const getData = async () => {
    const res = await fetch(url);
    const data = await res.json();

    const datA = data.results.slice(0, 9);

    setResults(datA);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-[15px] md:gap-x-[29px] lg:gap-x-[40px]">
      {results.map((movie, index) => {
        const { poster_path, title } = movie;

        return (
          <div
            key={index}
            className="relative w-full h-[154px] md:h-[192px]   lg:h-[226px]  "
          >
            <img
              src={IMG_PATH + poster_path}
              alt=""
              className="object-cover object-center  w-full h-[110px] rounded-[8px]"
            />

            <button className="absolute right-[8px] top-[8px]  md:right-[16px] md:top-[16px] bg-[#10141e] text-white hover:bg-white hover:text-black w-[32px] h-[32px] rounded-full flex items-center justify-center ">
              {false ? <FaBookmark /> : <FaRegBookmark />}
            </button>
            <div className=" text-white ">
              <div className=" flex gap-2 max-w-[120px] text-[11px] md:text-[13px] ">
                <p>2019</p>
                <div className="flex items-center ">
                  <RiFilmFill />
                  <p>Movie</p>
                </div>
                <p>PG</p>
              </div>
              <h1 className="text-[14px] md:text-[18px]">{title}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookmarkedMovies;
