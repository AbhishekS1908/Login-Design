import React from "react";
import Graph from "./Graph";
import PieChart from "./PieChart";

import Search from "../../assets/Search icon.png";
import Notifications from "../../assets/Vector.png";
import User from "../../assets/image 1.png";

import Money from "../../assets/Money.png";
import Transcations from "../../assets/Vector (1).png";
import Likes from "../../assets/Vector (2).png";
import People from "../../assets/Vector (3).png";

import Arrow from "../../assets/Arrow.png";
import SideArrow from "../../assets/SideArrow.png";

import LineGreen from "../../assets/Line 6.png";
import LineViolet from "../../assets/Line2.png";

const Columns = () => {
  return (
    <div className="flex flex-col mt-7 ml-5">
      <nav className="flex flex-wrap justify-between items-center text-black py-9 -ml-4 mr-12">
        <div className="text-2xl font-bold font-Montserrat mb-4 md:mb-0 md:mr-4">
          Dashboard
        </div>

        <div className="flex items-center">
          <div className="mb-4 md:mb-0 md:mr-7 relative">
            <input
              type="text"
              className="border border-gray-100 bg-[#FFFFFF] text-[#000000] font-normal rounded-xl py-3 px-3 h-7 w-44 text-md hover:border-black"
              placeholder="Search..."
            />
            <img
              alt="search"
              src={Search}
              className="absolute inset-y-0 right-2 pl-3 pr-2 m-auto pointer-events-none"
            />
          </div>

          <div className="mb-4 md:mb-0 md:mr-5">
            <img
              alt="Notify"
              src={Notifications}
              className="h-5 w-5 text-white hover:text-blue-600 cursor-pointer scale-x-90"
            />
          </div>

          <div>
            <img src={User} alt="User Logo" className="rounded-full" />
          </div>
        </div>
      </nav>
      <div className="grid grid-row-3">
        <div className="grid grid-cols-4 mr-4 -ml-5 h-32">
          <div className="bg-[#DDEFE0] rounded-3xl mr-8 font-normal">
            <img alt="" src={Money} className="mt-5 ml-48 scale-95" />
            <p className="ml-6 font-Montserrat">Total Revenues</p>
            <p className="font-bold text-2xl font-OpenSans ml-6 mt-1">
              $2,129,430
            </p>
          </div>
          <div className="bg-[#F4ECDD] rounded-3xl mr-8 font-normal">
            <img alt="" src={Transcations} className="mt-5 ml-48 scale-95" />
            <p className="ml-6 font-Montserrat">Total Transactions</p>
            <p className="font-bold text-2xl font-OpenSans ml-6 mt-1">1,520</p>
          </div>
          <div className="bg-[#EFDADA] rounded-3xl mr-8 font-normal">
            <img alt="" src={Likes} className="mt-5 ml-48 scale-95" />
            <p className="ml-6 font-Montserrat">Total Likes</p>
            <p className="font-bold text-2xl font-OpenSans ml-6 mt-1">9,721</p>
          </div>
          <div className="bg-[#DEE0EF] rounded-3xl mr-8 font-normal">
            <img alt="" src={People} className="mt-5 ml-44 scale-95" />
            <p className="ml-6 font-Montserrat">Total Users</p>
            <p className="font-bold text-2xl font-OpenSans ml-6 mt-1">892</p>
          </div>
        </div>
        <div className="text-xl mt-10 font-Montserrat bg-[#FFFFFF] rounded-2xl h-80 mr-10 -ml-5">
          <p className="font-bold pl-10 pt-7">Activities</p>
          <div className="flex items-center">
            <p className="font-normal pl-10 text-[#858585] text-sm mt-1">
              May - June 2021
            </p>
            <img alt="Arrow" src={Arrow} className="h-1 w-2 mt-1 mx-1.5" />
            {/* <div className="flex pr-52 font-Lato">
              <p className="pr-14">Guest</p>
              <p>User</p>
            </div> */}
          </div>
          <div className="h-64 bg-[#FFFFFF] rounded-b-2xl">
            <Graph />
          </div>
        </div>
        <div className="grid grid-cols-2 font-Montserrat mt-10 -ml-5">
          <div className="h-72 mt-5 mb-20 mr-10 rounded-2xl bg-[#FFFFFF] items-center">
            <div className="flex flex-row mt-7 justify-between">
              <p className="pl-10 font-bold">Top products</p>
              <div className="flex pr-11 items-center">
                <p className="font-normal text-[#858585] pr-2 flex text-sm">
                  May - June 2021
                </p>
                <img alt=".." src={Arrow} className="h-1 w-2" />
              </div>
            </div>
            <div className="bg-[#FFFFFF] rounded-b-lg">
              <PieChart />
            </div>
          </div>
          <div className="h-72 mt-5 mb-20 mr-10 rounded-2xl bg-[#FFFFFF] items-center">
            <div className="flex flex-row mt-7 justify-between">
              <p className="pl-10 font-bold">Today’s schedule</p>
              <div className="flex pr-11 items-center">
                <p className="font-normal text-[#858585] pr-2 text-sm">
                  See all
                </p>
                <img alt=".." src={SideArrow} className="h-2 w-1.5" />
              </div>
            </div>
            <div className="flex ml-10 mt-6">
              <img alt=".." src={LineGreen} className="h-20 w-1.5" />
              <div className="flex flex-col ml-3 text-sm font-OpenSans">
                <p className="text-[#666666] font-bold">
                  Meeting with suppliers from Kuta Bali
                </p>
                <p className="py-1 px-1 text-[#999999] text-sm">14.00-15.00</p>
                <p className="text-[#999999] pl-1 text-sm">
                  at Sunset Road, Kuta, Bali{" "}
                </p>
              </div>
            </div>
            <div className="flex ml-10 mt-3">
              <img alt=".." src={LineViolet} className="h-20 w-1.5" />
              <div className="flex flex-col ml-3 text-sm font-OpenSans">
                <p className="text-[#666666] font-bold">
                  Meeting with suppliers from Kuta Bali
                </p>
                <p className="py-1 px-1 text-[#999999] text-sm">14.00-15.00</p>
                <p className="text-[#999999] pl-1 text-sm">
                  at Sunset Road, Kuta, Bali{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Columns;
