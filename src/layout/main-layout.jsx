import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const MainLayout = () => {
  const user = Cookies.get("user");
  if (!user) {
    return <Navigate replace to={"/"} />;
  }
  return (
    <>
      <header className="p-5 bg-blue-500"></header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
