import React from "react";
import { useForm } from "react-hook-form";
import { request } from "../config/resquest";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Register = () => {
  const { handleSubmit, reset, register } = useForm();
  const navigate = useNavigate();

  const submit = (data) => {
    request
      .post("/register", data)
      .then((res) => {
        if (res.status === 200 || res.status > 200) {
          navigate("/");
        }
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-500 to-pink-400">
      <div className="bg-white rounded-lg shadow-lg w-[400px] p-8 transform transition duration-300 hover:scale-105">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Register</h2>
        <form onSubmit={handleSubmit(submit)} className="mt-6 space-y-4">
          <div>
            <input
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500 transition duration-300"
              type="email"
              {...register("email")}
              placeholder="Email"
            />
          </div>
          <div>
            <input
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500 transition duration-300"
              type="password"
              {...register("password")}
              placeholder="Password"
            />
          </div>
          <div>
            <input
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500 transition duration-300"
              type="text"
              {...register("name")}
              placeholder="Name"
            />
          </div>
          <button className="w-full py-3 bg-purple-500 text-white font-semibold rounded-md shadow-lg hover:bg-purple-600 transition duration-300">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
