import React from "react";
import Trending from "../components/Trending";
import MovieComponent from "../components/MovieComponent";
const Home = () => {
  return (
    <main className="   ">
      <div>
        <Trending />
      </div>
      <div className="">
        <h1 className=" text-[20px] md:text-[32px] mb-[16px] md:mb-[25px] ">
          Recommended for you
        </h1>
        <MovieComponent />
      </div>
    </main>
  );
};

export default Home;
