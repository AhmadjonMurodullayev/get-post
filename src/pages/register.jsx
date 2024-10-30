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
        if (res.status == 200 || res.status > 200) {
          navigate("/");
        }
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };
  return (
    <div>
      <div className="absolute rounded-sm w-[400px] p-[20px] bg-cyan-300 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <form onSubmit={handleSubmit(submit)} className="mt-[20px]">
          <div className="mt-[20px]">
            <input
              className="p-[10px] w-full"
              type="email"
              {...register("email")}
              placeholder="email"
            />
          </div>
          <div className="mt-[20px]">
            <input
              className="p-[10px] w-full"
              type="password"
              {...register("password")}
              placeholder="password"
            />
          </div>
          <div className="mt-[20px] mb-[20px]">
            <input
              className="p-[10px] w-full"
              type="text"
              {...register("name")}
              placeholder="name"
            />
          </div>
          <button className="p-[10px] bg-green-500">Send</button>
        </form>
      </div>
    </div>
  );
};
