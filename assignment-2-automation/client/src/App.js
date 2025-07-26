import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://gradnext-assignment.onrender.com/api/submissions")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Failed to fetch:", err));
  }, []);

  // console.log(users);
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">
        Admin Dashboard
      </h1>
      <div className="overflow-x-auto bg-white shadow-md rounded-xl">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-300 text-gray-700 uppercase text-xs font-semibold">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Email Opened</th>
              <th className="p-3">Link Clicked</th>
              <th className="p-3">Payment</th>
              <th className="p-3">Submitted</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr key={user._id} className="border-b">
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.phone}</td>
                  <td className="p-3">{user.emailOpened ? "✅" : "❌"}</td>
                  <td className="p-3">{user.clickedLink ? "✅" : "❌"}</td>
                  <td className="p-3">{user.paymentComplete ? "✅" : "❌"}</td>
                  <td className="p-3">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
