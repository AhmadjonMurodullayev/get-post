import React from "react";
import { request } from "../config/resquest";

export const Messages = () => {
  const [data, setData] = React.useState([]);
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    request.get("/messages").then((res) => {
      setData(res.data);
    });
  };

  const handlePost = (e) => {
    e.preventDefault();
    if (message.trim()) {
      request
        .post("/messages", { name: message })
        .then(() => {
          setMessage("");
          fetchMessages();
        });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-500 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Messages</h2>

        <div className="mt-4 max-h-[300px] overflow-y-auto border-t border-gray-300 pt-4">
          <table className="w-full border border-gray-200 rounded-lg text-left">
            <thead>
              <tr className="bg-gray-100 text-gray-600">
                <th className="p-3 border-b">ID</th>
                <th className="p-3 border-b">Message</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={item.id}
                  className={` hover:bg-blue-50 transition duration-150`}>
                  <td className="p-3 border-b text-gray-700">{index + 1}</td>
                  <td className="p-3 border-b text-gray-700">{item.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <form onSubmit={handlePost} className="mt-6 flex flex-col space-y-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write a message..."
            className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md shadow-lg hover:bg-blue-600 transition duration-300">
            Post Message
          </button>
        </form>
      </div>
    </div>
  );
};
