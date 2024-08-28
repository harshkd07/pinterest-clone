import React from "react";
import { PinData } from "../context/PinContext";
import PinCard from "../components/PinCard";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { UserData } from "../context/UserContext";
import axios from "axios";


function Account({ user }) {
  const navigate = useNavigate();
  const { setIsAuth, setUser } = UserData();
  
  const { pins } = PinData();
  let userPins;

  if (pins) {
    userPins = pins.filter((pin) => pin.owner === user._id);
  }

  const logoutHandler = async () => {
    try {
      const { data } = await axios.get("/api/user/logout");
      toast.success(data.message);
      navigate("/login");
      setIsAuth(false);
      setUser([]);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-6 w-full">
        <div className="flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-3xl text-gray-700">
              {user.name.slice(0, 1).toUpperCase()}
            </span>
          </div>
        </div>
        <h1 className="text-center text-2xl font-bold mt-4">{user.name}</h1>
        <p className="text-center text-gray-600 mt-2">{user.email}</p>
        <div className="flex justify-center mt-4 space-x-2">
          <button
            onClick={logoutHandler}
            className="bg-gray-200 px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          {userPins && userPins.length > 0 ? (
            userPins.map((e) => <PinCard key={e._id} pin={e} />)
          ) : (
            <p>No Pin yet</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Account;
