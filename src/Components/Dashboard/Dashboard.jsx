import React, { useState, useEffect, useContext } from "react";
import { UserContexts } from "../../contexts/UserContext";
import CopyToClipboard from "react-copy-to-clipboard";
import { Dropdown } from "primereact/dropdown";
import InputField from "../Inputs/InputField";
import InputFieldTwo from "../Inputs/InputFieldTwo";
import { MdNotInterested } from "react-icons/md";
import ActionButton from "../Inputs/ActionButton";
import { Link, useNavigate, useLocation } from "react-router-dom";
import LogoutModal from "../Modal/LogoutModal";
import { Popover } from "@headlessui/react";
import ReactLoading from "react-loading";
import { Arrowdown2, profilePicture } from "../../assets/index";

const Dashboard = () => {
  const fullName = localStorage.getItem("displayName");
  const email = localStorage.getItem("email");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/sign-in";

  const { pathname } = location;
  const splitLocation = pathname.split("/");

  let [isOpen, setIsOpen] = useState(false);
  let [Open, setOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="grid bg:grid-cols-7 relative gap-3 mb-12">
        <div className="col-span-1 bg:col-span-5 p-5 min-h-[50%] bg-mainWhite relative border-greySeven border rounded-md">
          <div className="pt-6 border border-greySeven">
            <div className="block px-4 sm:px-6 mb-7 justify-between relative">
              <div className="flex ml-auto  sm:hidden justify-end mb-5">
                <Popover className="relative">
                  <Popover.Button className="flex items-center border font-semibold text-mainBlack !border-greySeven outline-greySeven py-2 px-4">
                    Menu <img src={Arrowdown2} className="ml-1" />
                  </Popover.Button>

                  <Popover.Panel className="absolute z-10 right-0 cursor-pointer drop-shadow-2xl text-mainBlack top-10 w-[300px] bg-mainWhite">
                    <div className="flex flex-col">
                      <div className="pt-5 px-3 pb-5">
                        <h6 className="text-lg">{fullName}</h6>
                        <p className="text-greyFour tracking-wider text-sm font-light">
                          {email}
                        </p>
                      </div>
                      <Link
                        to="#"
                        className={
                          splitLocation[1] === "download"
                            ? "py-5 px-3 bg-gradedBlue bg-opacity-30 text-[14px] border-t-2 border-t-greyFive text-greyFive"
                            : "py-5 px-3 text-base border-t-2 border-t-greyFive text-greyFive"
                        }
                      >
                        Download pitch deck
                      </Link>
                      {/* <Link
                        to="/billing"
                        className={
                          splitLocation[1] === "billing"
                            ? "py-3 px-3 bg-gradedBlue bg-opacity-30 text-base"
                            : "py-3 px-3 text-base"
                        }
                      >
                        Billing
                      </Link> */}
                      <Link
                        to="#"
                        className={
                          splitLocation[1] === "settings"
                            ? "py-3 px-3 bg-gradedBlue bg-opacity-30 text-base"
                            : "py-3 px-3 text-base"
                        }
                      >
                        Settings
                      </Link>
                      <div className="py-3 px-3 text-base" onClick={openModal}>
                        Logout
                      </div>
                    </div>
                  </Popover.Panel>
                </Popover>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img src={profilePicture} className="mr-2 ss:mr-3" />
                  <div>
                    <h3 className="text-[20px] font-bold tracking-tighter">
                      {`Welcome back, ${fullName}`}
                    </h3>
                    <p className="text-greyFive text-[14px] sm:text-[16px] font-semibold">
                      Happy Building
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex">
                  <Popover className="">
                    <Popover.Button className="flex items-center border  text-mainBlack text-[14px] font-bold !border-greySeven outline-greySeven py-2 px-4">
                      Menu <img src={Arrowdown2} className="ml-2" />
                    </Popover.Button>

                    <Popover.Panel className="absolute z-10 right-0 cursor-pointer drop-shadow-2xl text-mainBlack top-30 w-[300px] bg-mainWhite">
                      <div className="flex flex-col">
                        <div className="pt-5 px-3 pb-5">
                          <h6 className="text-lg">{fullName}</h6>
                          <p className="text-mainBlue tracking-wider text-sm font-light">
                            {email}
                          </p>
                        </div>
                        <Link
                          to="#"
                          className={
                            splitLocation[1] === "download"
                              ? "py-3 px-3 bg-gradedBlue bg-opacity-30 text-base border-t-2 border-t-greyFive text-grey"
                              : "py-3 px-3 text-base border-t-2 border-t-greyFive text-greyFive"
                          }
                        >
                          Download pitch deck
                        </Link>
                        {/* <Link
                          to="/billing"
                          className={
                            splitLocation[1] === "billing"
                              ? "py-3 px-3 bg-gradedBlue bg-opacity-30 text-base"
                              : "py-3 px-3 text-base"
                          }
                        >
                          Billing
                        </Link> */}
                        <Link
                          to="#"
                          className={
                            splitLocation[2] === "settings"
                              ? "py-3 px-3 bg-gradedBlue bg-opacity-30 text-base"
                              : "py-3 px-3 text-base"
                          }
                        >
                          Settings
                        </Link>
                        <div
                          className="py-3 px-3 text-base"
                          onClick={openModal}
                        >
                          Logout
                        </div>
                      </div>
                    </Popover.Panel>
                  </Popover>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GUIDE */}
        <div className="col-span-1 bg:col-span-2 border border-greySeven rounded-md py-5 px-5 sm:px-2 bg-mainWhite">
          <h3 className="mb-5 font-bold text-lg text-mainBlack">Guides</h3>
        </div>
      </div>
      {/* <h1>Welcome to Kabbs Universal Dashboard </h1>
      <p>{fullName}</p> */}

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

export default Dashboard;

// import {
//   ConfirmIcon,
//   profilePicture2,
//   testnetIcon,
//   testnet2Icon,
//   Guide1,
//   Guide2,
//   LimitKey,
//   ArrowDown2,
// } from "../../assets";
