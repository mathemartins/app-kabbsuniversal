import React from "react";
import {
  GoogleplayDownload,
  AppstoreDownload,
  HeroPhone,
} from "../../assets/index.js";

const RidersHero = () => {
  return (
    <div className="bg-mainWhite  sm:px-12 lg:px-[6rem] xl:px-[10rem] font-poppins mt-16 sm:pt-12 text-mainWhite relative">
      <div className="hero w-full h-[40rem] xsm:py-36 py-24 flex flex-col justify-between px-6 ">
        <article className="text-center">
          <h2 className="text-[36px] mb-2">For Riders</h2>
          <p>How to ride</p>
        </article>
        <div>
          <p className="mb-4 text-[12px] ml-2">Get KABBS for riders</p>
          <div className="flex gap-4">
            <a href="https://play.google.com/store/apps/details?id=com.kabbsuniversalrider" target="_blank">
              <img src={GoogleplayDownload} alt="" className="h-10" />
            </a>           
             <img src={AppstoreDownload} alt="" className="h-10" />
          </div>
        </div>
      </div>

      <div className="bg-lightBlue text-mainBlack px-6 pt-10 sm:pb-24 xsm:pb-36 pb-10 ">
        <article className=" sm:w-[40%]">
          <p className="font-semibold text-[18px] mb-6">How to book</p>
          <p className="text-[14px]">
          To book a ride with KABBS, download the KABBS app, create an account, 
          set your pickup and destination locations, choose your ride type, 
          confirm the request, wait for your driver, hop in when they arrive, 
          pay through the app, and rate your ride afterward for feedback.
          </p>
        </article>
        <img
          src={HeroPhone}
          alt=""
          className="hidden sm:block absolute sm:bottom-[10px] xsm:bottom-[50px] h-[30rem] right-8"
        />

        <img src={HeroPhone} alt="" className=" sm:hidden  " />
      </div>
    </div>
  );
};

export default RidersHero;
