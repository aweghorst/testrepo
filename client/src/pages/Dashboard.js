import React from "react";
import { Redirect } from "react-router-dom";
import AddBike from "../components/AddBike";
import UserBike from "../components/UserBike";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import Auth from '../utils/auth';

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_USER);
  console.log(data?.user);

  const username = data?.user.username;

  if (!Auth.loggedIn()) {
    return <Redirect to="/Login" />
  }
  
  return (
    <div className="w-screen">
      {Auth.loggedIn() ? (
      <div className=" flex flex-col items-center pt-20">
          <div className="username capitalize">Hello {username}!</div>
          <div className="welcome">Here you can upload your bike information and if a bike is marked as missing, it will be automatically added to the Search page!</div>
      </div>
       ):(
       <>

       </>)}
      <AddBike />
      <UserBike />
    </div>
  );
};

export default Dashboard;
