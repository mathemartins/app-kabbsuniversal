import React from "react";
import { socialMedia } from "../../assets/index.js";

const Footer = () => {
  return (
    <section className=" px-[1.5rem] md:px-[3rem] pt-[5rem] md:pt-[7rem] py-6 bg-mainBlack text-[14px]">
      <div className="text-grey flex justify-between">
        <div className="hidden text-white md:flex flex-col gap-5">
          <h2>Recieve latest News</h2>
          <form className=" flex flex-col sm:flex-row gap-5" action="">
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email Address"
              className="bg-darkGrey py-1 px-[1rem] rounded-[12px] text-white"
              py-4
            />
            <button className="bg-secondary h-10 w-[10rem] rounded-[10px] text-white">
              Get Started
            </button>
          </form>
          <p className="w-[13rem] md:w-[27rem] text-dimWhite">
            By entering your email address, you are confirming that you agree to
            subsctibe to our newsletter
          </p>
        </div>

        <>
          <ul className="flex flex-col gap-2 text-[15px] text-dimWhite">
            <h2 className="text-white pb-3">Our Services</h2>
            <li>Rides</li>
            <li>Food delivery</li>
            <li>Glocery delivery</li>
            <li>Business</li>
            <li>Airports</li>
            <li>Cities</li>
          </ul>
        </>

        <>
          <ul className="flex flex-col gap-2 text-dimWhite">
            <li className="text-white pb-3">Partner with Kabbs Universal</li>
            <li>Sign up as a driver</li>
            <li>Sign up as a courier</li>
            <li>Fleets</li>
            <li>Franchise</li>
            <li>Influencers</li>
          </ul>
        </>

        <>
          <ul className="xs:flex flex-col gap-2 hidden text-dimWhite">
            <li className="text-white pb-3">Company</li>
            <li>Careers</li>
            <li>Security</li>
            <li>Press</li>
            <li>Blog</li>
            <li>Brand guidelines</li>
          </ul>
        </>
      </div>
      <ul className="flex flex-col gap-2 xs:hidden p-5 text-dimWhite">
        <li className="text-white pb-3">Company</li>
        <li>Careers</li>
        <li>Security</li>
        <li>Press</li>
        <li>Blog</li>
        <li>Brand guidelines</li>
      </ul>

      <>
        <ul className="xsm:hidden flex-col gap-2 mt-8">
          <li className="text-white pb-3">Social Media</li>
          <li>
            <img src={socialMedia} alt="" />
          </li>
        </ul>
      </>

      <div className=" text-white md:hidden mt-8 flex flex-col gap-2">
        <h2 className="text-[16px] text-dimWhite">Recieve latest News</h2>
        <form className=" flex mt-2 flex-col xs:flex-row gap-7" action="">
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email Address"
            className="bg-darkGrey py-1 px-[1rem] w-[15rem] rounded-[12px] text-white"
            py-4
          />
          <button className="bg-secondary h-8 w-[8rem] sm:w-[15rem] rounded-[10px] text-white">
            Get Started
          </button>
        </form>
        <p className="max-w-[30rem] text-dimWhite">
          By entering your email address, you are confirming that you agree to
          subsctibe to our newsletter
        </p>
      </div>

      <>
        <ul className="xsm:flex flex-col gap-2 hidden mt-12">
          <li className="text-white pb-3">Social Media</li>
          <li>
            <img src={socialMedia} alt="" />
          </li>
        </ul>
      </>

      <div className="xs:flex justify-between text-mainWhite mt-12">
        <h2 className="text-[18px] font-bold">Kabbs Universal</h2>
        <p className="text-[12px]">&copy; 2023 Kabbs Universal Technologies</p>
      </div>
    </section>
  );
};

export default Footer;
