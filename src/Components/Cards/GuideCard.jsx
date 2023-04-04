import React from "react";
import { Link } from "react-router-dom";

const GuideCard = ({ image, link, duration, text }) => {
  return (
    <>
      <div className="w-full relative mb-2 border border-greySeven rounded">
        <a href="#" rel="" className="flex h-full w-full">
          <div className="relative w-[50%]">
            <img src={image} className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col w-[50%] text-xs justify-between p-3">
            <h6 className="text-xs ss:text-lg bg:text-xs font-bold text-greyFive mb-2">
              Blog
            </h6>
            <p className="text-mainBlack text-xs ss:text-lg bg:text-xs font-semibold mb-2">
              {text}
            </p>
            <p className="text-greyFive ss:text-lg bg:text-xs">
              {duration} <span></span>
            </p>
          </div>
        </a>
      </div>
    </>
  );
};

export default GuideCard;
