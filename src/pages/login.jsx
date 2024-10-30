import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { request } from "../config/resquest";
import { saveState } from "../config/storage";

export const Login = () => {
  const { handleSubmit, reset, register } = useForm();
  const navigate = useNavigate();
  const submit = (data) => {
    request
      .post("/login", data)
      .then((res) => {
        saveState("user", res.data);
        navigate("/app", {
          replace: true,
        });
      })
      .catch((error) => {});
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-cyan-400">
      <div className="bg-white rounded-lg shadow-lg w-[400px] p-8 transform transition duration-300 hover:scale-105">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Login</h2>
        <p className="text-center text-gray-600 mt-2">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
        <form onSubmit={handleSubmit(submit)} className="mt-6 space-y-4">
          <div>
            <input
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
              type="email"
              {...register("email")}
              placeholder="Email"
            />
          </div>
          <div>
            <input
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
              type="password"
              {...register("password")}
              placeholder="Password"
            />
          </div>
          <button className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md shadow-lg hover:bg-blue-600 transition duration-300">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
