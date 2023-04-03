import React from "react";
import MobileTopBar from "../Containers/MobileTopBar";
import Dashboard from "./Dashboard";
import TopBar from "../Containers/TopBar";

import { Link } from "react-router-dom";

const DashboardHome = () => {
  return (
    <div className="h-screen overflow-auto bg-gradedBlue bg:ml-[15%] pb-12 ">
      <div className="block bg:hidden">
        <MobileTopBar />
      </div>

      <div className="col-span-12 bg:col-span-10 min-h-screen relative overflow-auto">
        <TopBar />
        <div className="m-3 -mt-20 h-full">
          <Dashboard />
        </div>
      </div>

      {/*  <div className="m-3 -mt-20 h-full">
          <DashboardLists />
        </div>
      </div> */}

      <div className="text-center text-[14px] text-greyFour">
        <p>© 2023 Kabbs Universal </p>
        <p className="text-mainBlue">
          <Link to={"#"} className="cursor-pointer font-bold mr-1">
            Terms of Use
          </Link>

          <Link to={"#"} className="cursor-pointer font-bold mr-1">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default DashboardHome;

{
  /* <div className="grid grid-cols-12 h-full overflow-auto"> */
}
{
  /* <div className="col-span-12 bg:col-span-2 h-full hidden bg:block">
          <SideBar />
        </div> */
}

// import SideBar from "../Containers/SideBar";
// import TopBar from "../Containers/TopBar";
// import DashboardLists from "./DashboardLists";
{
  /* <div className="col-span-12 bg:col-span-10 min-h-screen relative overflow-auto">
          <TopBar />
          <div className="m-3 -mt-20 h-full">
            <DashboardLists />
          </div>
        </div> */
}
{
  /* </div> */
}
