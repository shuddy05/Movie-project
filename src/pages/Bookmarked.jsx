import React from "react";
import BookmarkedMovies from "../components/BookmarkedMovies";
import BookmarkedTvseries from "../components/BookmarkedTvseries";

const Bookmarked = () => {
  return (
    <main className="">
      <div>
        <h1 className=" text-[20px] md:text-[32px] mb-[16px] md:mb-[25px] ">
          Bookmarked Movies
        </h1>
        <BookmarkedMovies />
      </div>
      <div>
        <h1 className=" text-[20px] md:text-[32px] mb-[16px] md:mb-[25px] ">
          Bookmarked TV Series
        </h1>
        <BookmarkedTvseries />
      </div>
    </main>
  );
};

export default Bookmarked;
