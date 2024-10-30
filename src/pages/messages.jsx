import React from "react";
import { request } from "../config/resquest";

export const Messages = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    request
      .get("/messages")
      .then((res) => {
        setData(res.data);
      });
  }, []);
  return (
    <div className="text-center">
      {data.map((item) => (
        <h1 key={item.id}>
          {item.id} {item.name}
        </h1>
      ))}
    </div>
  );
};
