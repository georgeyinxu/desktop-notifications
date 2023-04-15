import React from "react";
import { Fragment } from "react";

import Sidebar from "@/components/sidebar";
import Body from "@/components/body";

const Dashboard = () => {
  return (
    <Fragment>
      <Sidebar />
      
      <Body />
    </Fragment>
  );
}

export default Dashboard;
