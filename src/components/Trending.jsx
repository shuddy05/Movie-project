import React from "react";
import useFetch from "../hooks/useFetch";
import { useState, useEffect } from "react";
const url =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';
const Trending = () => {
  const [results, setResults] = useState([]);

  const getData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results);
    const datA = data.results.slice(4, 9);
    console.log(datA);

    setResults(datA);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log("jjjj");

  return (
    <main>
      <h1 className=" text-[20px] md:text-[32px]">Trending</h1>
      <div className="flex justify-between gap-[40px]">
        {results.map((movie, index) => {
          const { poster_path, title } = movie;

          return (
            <div
              key={index}
              className=" bg-cover object-cover max-w-[470px] max-h-[230px] rounded-lg "
              style={{ backgroundImage: `url(${IMG_PATH + poster_path})` }}
            >
              <div className="">
                <p>2019</p>
                <div>
                  <p>Movie</p>
                </div>
                <p>PG</p>
              </div>
              <h1 className="">{title}</h1>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Trending;
