import { Popover } from "@headlessui/react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { arrowdown, profilePicture, dbActive } from "../../assets/index";
import LogoutModal from "../Modal/LogoutModal";

const MobileTopBar = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  let [isOpen, setIsOpen] = useState(false);
  const [showExplore, setShowExplore] = useState(false);

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
      <div className="px-5 py-5 relative bg-mainWhite">
        <div className="flex items-center justify-between mb-7">
          <Link to="/" className="text-secondary font-bold text-[20px]">
            Kabbs Universal
          </Link>
          <div onClick={() => setShow(!show)}>
            {show ? (
              <FaTimes className="text-mainRed font-bold" />
            ) : (
              <FaBars className="text-greyFive font-bold" />
            )}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-mainBlack font-semibold">
            <h3>{splitLocation[1].toUpperCase()}</h3>
          </div>
          <div className="flex items-center text-mainBlue text-sm font-semibold">
            <img src={profilePicture} alt="" className="h-6 w-6 mr-2" />
            <div>
              <Popover className="relative">
                <Popover.Button className="flex items-center border-none outline-none">
                  {fullName}
                  {/* <img src={arrowdown} className="ml-2" /> */}
                </Popover.Button>

                {/* <Popover.Panel className="absolute z-10 right-0 cursor-pointer drop-shadow-2xl text-mainBlack top-10 w-[300px] bg-mainWhite">
                  <div className="flex flex-col">
                    <div className="pt-5 px-3 pb-5">
                      <h6 className="text-lg">{fullName}</h6>
                      <p className="text-secondary tracking-wider text-sm font-light">
                        {email}
                      </p>
                    </div>
                    <Link
                      to="#"
                      className={
                        splitLocation[1] === "download"
                          ? "py-2 px-3 bg-gradedBlue bg-opacity-30 text-base border-t-2 border-t-greyFive text-greyFive"
                          : "py-2 px-3 text-base border-t-2 border-t-greyFive text-greyFive"
                      }
                    >
                      Download pitch deck
                    </Link>
                  
                    <Link
                      to="#"
                      className={
                        splitLocation[2] === "settings"
                          ? "py-2 px-3 bg-gradedBlue bg-opacity-30 text-base  text-greyFive"
                          : "py-2 px-3 text-base  text-greyFive"
                      }
                    >
                      Settings
                    </Link>
                    <div className="py-5 px-3 text-base" onClick={openModal}>
                      Logout
                    </div>
                  </div>
                </Popover.Panel> */}
              </Popover>
            </div>
          </div>
        </div>
        {show && (
          <div className=" absolute left-0 right-0 top-0 h-screen bg-mainWhite pt-4 z-20">
            <div className="flex items-center justify-between mb-7 px-5">
              <Link to="/" className="text-secondary font-bold text-[20px]">
                Kabbs Universal
              </Link>
              <div onClick={() => setShow(!show)}>
                {show ? (
                  <FaTimes className="text-mainRed font-bold" />
                ) : (
                  <FaBars className="text-greyFive font-bold" />
                )}
              </div>
            </div>
            <Link
              to="/dashboard"
              className={
                splitLocation[2] != "explore" &&
                splitLocation[2] != "docs" &&
                splitLocation[2] != "contact"
                  ? `flex items-center px-5 text-mainBlue bg-gradedBlue bg-opacity-20 py-5 border-l-2 border-l-mainBlue`
                  : "bg-mainWhite py-5 flex items-center pl-5"
              }
            >
              {splitLocation[2] != "dashboard" ? (
                <img src={dbActive} className="mr-2" />
              ) : (
                <img src={dbActive} className="mr-3" />
              )}
              <span>Dashboard</span>
            </Link>
            <Link to="#">
              <div
                onClick={() => setShowExplore(!showExplore)}
                className={
                  splitLocation[2] === "explore"
                    ? `text-mainBlue py-5 bg-gradedBlue border-l-4 border-l-mainBlue flex items-center pl-5`
                    : "bg-mainWhite py-5 flex items-center pl-5"
                }
              >
                {/* {showExplore ? (
                  <img src={ActiveExplore} className="mr-2" />
                ) : (
                  <img src={InactiveExplore} className="mr-3" />
                )} */}
                <span>Explore</span>
              </div>
              {showExplore && (
                <div className="ml-5">
                  {/* <Link
                    to="/dashboard/explore/debug"
                    className={
                      splitLocation[3] === "debug"
                        ? `text-mainBlue py-5 flex items-center pl-10`
                        : " py-5 flex items-center pl-10"
                    }
                  >
                    <span>Debug</span>
                  </Link> */}
                  <Link
                    to="#"
                    className={
                      splitLocation[2] === "subscription"
                        ? `text-mainBlue py-5 flex items-center pl-10`
                        : "py-5 flex items-center pl-10"
                    }
                  >
                    <span>Subsciption</span>
                  </Link>
                  <Link
                    to="#"
                    className={
                      splitLocation[2] === "pricing"
                        ? `text-mainBlue py-5 flex items-center pl-10`
                        : "py-5 flex items-center pl-10"
                    }
                  >
                    <span>Pricing</span>
                  </Link>
                </div>
              )}
            </Link>
            <Link
              to="#"
              className={
                splitLocation[2] === "docs"
                  ? `flex items-center px-5 text-mainBlue bg-gradedBlue bg-opacity-20 py-5 border-l-2 border-l-mainBlue`
                  : "bg-mainWhite py-5 flex items-center pl-5"
              }
            >
              {/* {splitLocation[1] === "dashboard" ? (
                <img src={InactiveDoc} className="mr-2" />
              ) : (
                <img src={InactiveDoc} className="mr-3" />
              )} */}
              <span className="w-full flex justify-between items-center pr-5">
                Docs
                {/* <img src={strokeIcon} /> */}
              </span>
            </Link>

            <div></div>
            <div></div>
          </div>
        )}
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

export default MobileTopBar;

// import {
//   ColouredLogo,
//   Menuburger,
//   profilePicture2,
//   dbActive,
//   dbIcon,
//   InactiveDoc,
//   ActiveExplore,
//   InactiveExplore,
//   strokeIcon,
// } from "../../assets";
// import LogoutModal from "../Modal/LogoutModal";
// import { ArrowDown } from "../../assets/index";
