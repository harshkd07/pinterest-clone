import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../context/UserContext";
import { LoadingAnimation } from "../components/Loading";
import { PinData } from "../context/PinContext";

const Login = ()=> {
  const{fetchPins} = PinData();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {loginUser, btnLoading} = UserData()
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    loginUser(email, password, navigate, fetchPins);

  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center ">
          <img
            src="https://static-00.iconduck.com/assets.00/pinterest-icon-2048x2048-d7p0u7c5.png"
            alt="pinterest"
            className="h-12 rounded-full"
          />
        </div>
        <h2 className="text-2xl font-semibold text-center mb-6">
          Log in to see more
        </h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="common-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="common-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="common-btn">
          {btnLoading ? <LoadingAnimation/>:"Login"}
          </button>
        </form>
        <div className="mt-6 text-center">
          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 to-gray-50">OR</span>
            </div>
          </div>

          <div className="mt-4 text-center text-sm">
            <span>
              Not on Pinterest yet?{" "}
              <Link
                to="/register"
                className="font-medium text-pinterest hover:underline"
              >
                Register
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
