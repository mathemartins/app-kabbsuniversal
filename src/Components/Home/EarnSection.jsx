import React from "react";
import { star, creditCard, trip } from "../../assets/index.js";

const EarnSection = () => {
  return (
    <div className=" flex flex-col items-center xsm:w-[50%] pt-6 sm:w-[80%] mx-auto pb-24">
      <button className="text-mainWhite bg-secondary  w-36 py-2 rounded-3xl font-bold px-2 ">
        Get Started
      </button>

      <article className="text-center my-6">
        <h2 className="text-[24px]">More than just an App!</h2>
        <p>
          We are connecting riders with the best local drivers at the best
          price. When you ride with Kabbs Universal, we do our best to make the
          ride as seamless and comfortable as possible.
        </p>
      </article>

      <div className="flex items-center justify-between gap-4">
        <img src={star} alt="" className="h-24" />
        <div>
          <h2 className="font-semibold ml-4">Reliable Rides</h2>
          <p className="ml-4">
            You’ll see your driver’s contact details and can rate them at the
            end of the trip. Your feedback helps us keep the best drivers
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between my-8 gap-4">
        <img src={creditCard} alt="" className="h-24" />
        <div>
          <h2 className="font-semibold">No Cash, No Hasle</h2>
          <p>
            Pay in cash or add your credit card to the app and we’ll
            authomatically charge it when you arrive your destination.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <img src={trip} alt="" className="h-24" />
        <div>
          <h2 className="font-semibold">Conveninent Business Trips</h2>
          <p>
            You can use Kabbs Universal for your personal or business trips.
            Switch the payment method at the tap of a button.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EarnSection;
