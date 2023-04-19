import React from "react";

import DashboardIcon from "../../assets/dashboard_icon.png";
import TransactionsIcon from "../../assets/transaction_icon.png";
import ScheduleIcon from "../../assets/schedule_icon.png";
import UserIcon from "../../assets/user_icon.png";
import SettingsIcon from "../../assets/setting_icon.png";

const Dashboard = () => {
  return (
    
      <div className="flex h-full">
        <div className="bg-[#000000] font-Montserrat pl-10 pt-12 my-10 ml-10 w-72 rounded-3xl overflow-hidden text-white">
          <p className="text-[#FFFFFF] font-bold text-3xl">Board.</p>
          <div className="flex flex-row mt-16 font-bold">
            <img alt="dash" src={DashboardIcon} className="mr-6 w-4 h-4 mt-1.5" />
            <p className="text-lg">Dashboard</p>
          </div>
          <div className="flex flex-row mt-10 font-normal">
            <img
              alt="dash"
              src={TransactionsIcon}
              className="mr-6 w-4 h-4 mt-1.5"
            />
            <p className="text-lg">Transactions</p>
          </div>
          <div className="flex flex-row mt-10 font-normal">
            <img alt="dash" src={ScheduleIcon} className="mr-6 w-4 h-4 mt-1.5" />
            <p className="text-lg">Schedule</p>
          </div>
          <div className="flex flex-row mt-10 font-normal">
            <img alt="dash" src={UserIcon} className="mr-6 w-4 h-4 mt-1.5" />
            <p className="text-lg">User</p>
          </div>
          <div className="flex flex-row mt-10 font-normal">
            <img alt="dash" src={SettingsIcon} className="mr-6 w-4 h-4 mt-1.5" />
            <p className="text-lg">Settings</p>
          </div>
          <div className="flex flex-col font-normal mt-96 pt-7 mb-10">
            <p className="text-lg flex font-normal my-3">Help</p>
            <p className="text-lg">Contact us</p>
          </div>
         
        </div>
      </div>
  );
};

export default Dashboard;
