import React from "react";
import { Coins, PaymentMethod } from "../assets/index";

const Payment = () => {
  return (
    <section className="bg-mainWhite text-mainBlack px-3 ss:px-6 sm:px-12 lg:px-[6rem] xl:px-[10rem] py-6 sm:py-20">
      <div className="mb-16 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <article className="xsm:w-[50%] md:w-[40%]">
          <h2 className="font-semibold text-[18px]">Pay by card or by cash</h2>
          <p className="my-2">
            Kabbs Universal knows that everyone feels different about paying
            with cards. That’s why the app gives you a choice of paying with
            card or cash. You can add multiple cards on file and chose to pay
            with any of them.
          </p>
        </article>
        <img src={PaymentMethod} alt="" />
      </div>

      <div className="mb-16 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <img src={Coins} alt="" className="hidden sm:flex" />
        <article className="xsm:w-[50%] md:w-[40%]">
          <h2 className="font-semibold text-[18px]">Get Discounts on Rides</h2>
          <p className="my-2">
            Use Promo Codes to get trips discounts.Tap Promo Enter your Promo
            Code and tap apply Please note promo codes are authomatically
            applied in reverse order. Your most recently added promo code will
            be applied to your current or next trip.
          </p>
        </article>
        <img src={Coins} alt="" className="sm:hidden" />
      </div>

      <div className="driveAndEarnBg mt-12 sm:mt-16 xsm:mt-[12rem] text-mainWhite flex flex-col sm:flex-row items-center justify-center">
        <div>
          <h2 className="text-[20px] font-bold hidden sm:block">
            Drive & Earn!
          </h2>
          <h2 className="text-[20px] font-bold sm:hidden text-center">
            Drive & Earn!
          </h2>
          <p className=" mb-6 sm:mb-0">Call the shots, be your own boss!</p>
        </div>
        <button className="text-mainBlack bg-mainWhite sm:ml-[6rem] w-36 py-2 rounded-3xl font-bold px-2">
          Sign Up to Drive
        </button>
      </div>
    </section>
  );
};

export default Payment;
