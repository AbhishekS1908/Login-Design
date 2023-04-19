import React from "react";

import Dashboard from "./Dashboard";
import Columns from "./Columns";

const DashboardPage = () => {
  return (
    <div>
      <div className="grid grid-cols-2 bg-[#DDDDDD]">
        <div>
          <Dashboard />
        </div>
        <div className="-ml-96">
          <Columns />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
