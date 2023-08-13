import React from "react";
import "./BannerItem.css";

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full h-full">
      <div className="carousel-img w-full">
        <img src={image} alt="" className="w-full h-full mx-auto rounded-sm" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-1">
        <a href={`#slide${prev}`} className="btn btn-circle bg-[#4407CB]">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle bg-[#FF3811]">
          ❯
        </a>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
        <h1 className="text-6xl font-bold text-white">
          Affordable <br />
          Price for Car <br />
          Servicing
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-2/3">
        <p className="text-xl text-white">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 bottom-1">
        <button className="p-[10px] rounded-lg bg-[#FF3811] text-white mr-5">
          Discover More
        </button>
        <button className="p-[10px] rounded-lg bg-[#4407CB] text-white">
          Latest Project
        </button>
      </div>
    </div>
  );
};

export default BannerItem;
