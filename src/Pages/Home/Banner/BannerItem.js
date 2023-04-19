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
        <a href={`#slide${prev}`} className="btn btn-circle bg-blue-400">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle bg-orange-500">
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
        <button className="btn btn-secondary mr-5">Discover More</button>
        <button className="btn btn-outline btn-secondary">Latest Project</button>
      </div>
    </div>
  );
};

export default BannerItem;
