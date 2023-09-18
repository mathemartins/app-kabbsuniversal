import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Link as AnchorLink } from "react-scroll";
// import { Logo } from "../../assets/index";
import { FaBars, FaTimes } from "react-icons/fa";
// import Button from "../../Components/Button";

// import {
//   Product,
//   Resources,
//   HowItWorks,
//   Price,
// } from "../navigation/navLinks/index";
// import Products from "../../Components/home/Products";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMobileMenu = () => setOpen(false);
  return (
    <>
      <nav className="bg-black w-full z-10 text-white fixed top-0 h-16 left-0 right-0 px-3 ss:px-6 sm:px-12 lg:px-[6rem] xl:px-[10rem] font-poppins py-3">
        <div className="flex items-center justify-between text-center text-[13px] lg:text-[16px]">
          <div className="z-50 py-2 xsm:w-auto w-full flex justify-between">
            {/* <Link to={"./"} onClick={closeMobileMenu}>
              <img
                src={Logo}
                alt=""
                className=" w-[8rem] md:w-[7rem] py-2 hover:cursor-pointer"
              />
            </Link> */}

            <Link className="text-[18px] font-bold cursor-pointer"
              to={"/"}
            >
              KABBS Universal
            </Link>

            <div onClick={() => setOpen(!open)} className="xsm:hidden text-xl">
              {open ? <FaTimes /> : <FaBars />}
            </div>
          </div>

          <ul className="xsm:flex items-center w-[35%] lg:w-[40%] justify-between  hidden ">
            {/* <Product />
            <HowItWorks />
            <Resources />
            <Price /> */}

            <Link
              to={"/"}
              >
                Home
              </Link>
              <Link
              to={"/products"}
              >
                Products
              </Link>
              <Link
              to={"/contacts"}
              >
                Contact
              </Link>
              <Link
              to={"/about-us"}
              >
                About Us
              </Link>
              <Link
              to={"/FAQ"}
              >
                F A Q
              </Link>
          </ul>
          <div className="hidden xsm:flex gap-2 font-semibold">
            <Link
              to={"/for-riders"}
              className="bg-mainBlack border-[0.25px] border-mainWhite py-2 md:py-2 xsm:w-[8rem] rounded-3xl"
            >
              For Riders
            </Link>

            <Link
              to={"/for-drivers"}
              className="bg-secondary flex gap-2 items-center justify-center py-2 md:py-2 xsm:w-[8rem] rounded-3xl"
            >
              For Drivers
            </Link>
          </div>

          {/* Mobile nav */}
          <>
            <ul
              className={`
        xsm:hidden bg-mainBlack fixed flex flex-col items-center w-full h-[100vh] xs:w-[50%] ss:w-[30%] top-0 overflow-y-auto bottom-0 pt-[7rem] pl-4 text-[20px] font-semibold
        duration-500 ${open ? "right-0 " : "right-[-100%] "}
       `}
            >
              <li>Home</li>
              <li>Products</li>
              <li>Contact</li>
              <li>About Us</li>
              <li>F A Q</li>
              

              <div className="font-semibold mt-12">
                <h2 className="bg-mainBlack border-[0.25px] border-mainWhite py-2 w-36 rounded-3xl">
                  For riders
                </h2>

                <Link
                  to={"/for-drivers"}
                  className="bg-secondary flex gap-2 items-center justify-center py-2 w-36 rounded-3xl mt-2"
                >
                  For drivers
                </Link>
              </div>
              {/* <li className="hover:cursor-pointer hover:text-Lightgrey">
              <AnchorLink
                spy={true}
                smooth={true}
                to="productSection"
                onClick={closeMobileMenu}
              >
                Products
              </AnchorLink>
            </li> */}
            </ul>
            {/* <ul
              className={`
        xsm:hidden bg-black fixed flex flex-col justify-between items-center w-full xs:w-[60%] sm:w-[50%] top-0 overflow-y-auto bottom-0 pt-[7rem]  pl-4 text-[20px] font-semibold
        duration-500 ${open ? "left-0 " : "left-[-100%] "}
       `}
            >
              <li className="hover:cursor-pointer hover:text-Lightgrey">
                <AnchorLink
                  spy={true}
                  smooth={true}
                  to="productSection"
                  onClick={closeMobileMenu}
                >
                  Products
                </AnchorLink>
              </li>

              <li className="hover:cursor-pointer hover:text-Lightgrey">
                <AnchorLink
                  spy={true}
                  smooth={true}
                  to="howItWorks"
                  onClick={closeMobileMenu}
                >
                  How it works
                </AnchorLink>
              </li>

              <Resources />

              <li className="hover:cursor-pointer hover:text-Lightgrey">
                <AnchorLink
                  spy={true}
                  smooth={true}
                  to="pricesection"
                  onClick={closeMobileMenu}
                >
                  Pricing
                </AnchorLink>
              </li>
        
              <li>
                <Link
                  to={"/contact-us"}
                  className="py-7 px-3 "
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </Link>
              </li>
              <Link to="/login" className="py-5">
                <Button />
              </Link>
            </ul> */}
          </>
        </div>
      </nav>
      {/* <Outlet /> */}
    </>
  );
};

export default Navbar;
