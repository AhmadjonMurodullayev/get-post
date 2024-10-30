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
    <div>
      <div className="absolute rounded-sm w-[400px] p-[20px] bg-cyan-300 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <Link to={"/register"}>Register</Link>
        <form onSubmit={handleSubmit(submit)} className="mt-[20px]">
          <div className="mt-[20px]">
            <input
              className="p-[10px] w-full"
              type="email"
              {...register("email")}
              placeholder="email"
            />
          </div>
          <div className="mt-[20px] mb-[20px]">
            <input
              className="p-[10px] w-full"
              type="password"
              {...register("password")}
              placeholder="password"
            />
          </div>
          <button className="p-[10px] bg-green-500 w-full">Send</button>
        </form>
      </div>
    </div>
  );
};
