import React from "react";
import AddBike from "../components/AddBike";
import UserBike from "../components/UserBike";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";


const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_USER);
  console.log(data?.user);

  const username = data?.user.username;
  return (
    <div className="w-screen">
      <p>Hello <span className="username">{username}</span></p>
      <AddBike />
      <UserBike />
    </div>
  );
};

export default Dashboard;
