import React, { useState } from "react";
import { Popover } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import LogoutModal from "../Modal/LogoutModal";
import { arrowdown, profilePicture } from "../../assets/index";

const TopBarTwo = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const fullName = localStorage.getItem("displayName");
  const email = localStorage.getItem("email");

  return (
    <>
      <div className="flex justify-between items-center bg-mainWhite w-full py-12 md:py-5 px-5 sm:px-10">
        <div className="flex items-center">
          <h6 className="text-mainBlack font-bold text-xl">
            {splitLocation[1].toUpperCase()}
          </h6>
        </div>
        <div className="flex items-center text-mainBlue text-sm font-semibold">
          <img src={profilePicture} className="w-[30px] mr-2" />
          <div className="flex flex-col">
            <Popover className="relative">
              <Popover.Button className="flex items-center  border-none outline-none">
                {fullName} <img src={arrowdown} className="ml-2" />
              </Popover.Button>

              <Popover.Panel className="absolute z-10 right-0 cursor-pointer drop-shadow-2xl text-mainBlack top-10 w-[300px] bg-mainWhite">
                <div className="flex flex-col">
                  <div className="pt-5 px-3 pb-5">
                    <h6 className="text-[16px]">{fullName}</h6>
                    <p className="text-greyFour text-sm font-light">{email}</p>
                  </div>
                  <Link
                    to="#"
                    className={
                      splitLocation[1] === "download"
                        ? "py-5 px-3 bg-gradedBlue bg-opacity-30 text-base border-t-2 border-t-greyFive text-greyFive"
                        : "py-5 px-3 text-base border-t-2 border-t-greyFive text-greyFive"
                    }
                  >
                    Download pitch deck
                  </Link>
                  {/* <Link
                    to="/billing"
                    className={
                      splitLocation[1] === "billing"
                        ? "py-5 px-3 bg-gradedBlue bg-opacity-30 text-base"
                        : "py-5 px-3 text-base"
                    }
                  >
                    Billing
                  </Link> */}
                  <Link
                    to="#"
                    className={
                      splitLocation[1] === "settings"
                        ? "py-5 px-3 bg-gradedBlue bg-opacity-30 text-base"
                        : "py-5 px-3 text-base"
                    }
                  >
                    Settings
                  </Link>
                  <div className="py-5 px-3 text-base" onClick={openModal}>
                    Logout
                  </div>
                </div>
              </Popover.Panel>
            </Popover>
          </div>
        </div>
      </div>
      {isOpen && (
        <LogoutModal
          closeModal={closeModal}
          openModal={openModal}
          isOpen={isOpen}
          title="Logout"
          text="You are about to logout from your account, are you sure?"
        />
      )}
    </>
  );
};

export default TopBarTwo;
