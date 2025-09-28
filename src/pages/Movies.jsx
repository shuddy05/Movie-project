import React from "react";
import MovieComponent from "../components/MovieComponent";
const Movies = () => {
  return (
    <div className="w-full px-4 md:px-8 ">
      <h1 className=" text-[20px] md:text-[32px] mb-[16px] md:mb-[25px] ">
        Movies
      </h1>
      <MovieComponent />
    </div>
  );
};

export default Movies;
