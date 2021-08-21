import React from "react";
import AddBike from "../components/AddBike";
import UserBike from "../components/UserBike";

const Dashboard = () => {
    return (
        <div className="">
            <UserBike />
            <AddBike />
        </div>
    );
};

export default Dashboard;
