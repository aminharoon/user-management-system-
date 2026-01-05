import React from "react";
import { useState } from "react";
import Card from "./Components/Card";
function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [allUsers, setAllUsers] = useState(() => {
    const data = localStorage.getItem("users");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  });

  const handleSUbmit = (e) => {
    e.preventDefault();
    const oldUser = [...allUsers];
    oldUser.push({
      id: Date.now(),
      username,
      email,
      role,
      profilePicture,
    });
    setAllUsers(oldUser);
    console.log(oldUser);
    localStorage.setItem("users", JSON.stringify(oldUser));
    setUsername("");
    setEmail("");
    setRole("");
    setProfilePicture("");
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8 ">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          User Registration System
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={handleSUbmit}>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                Add New User
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Username *
                  </label>
                  <input
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter username"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Role *
                  </label>
                  <select
                    value={role}
                    onChange={(e) => {
                      setRole(e.target.value);
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="">Select a role</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                    <option value="Manager">Manager</option>
                    <option value="Developer">Developer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Profile Picture url
                  </label>
                  <input
                    value={profilePicture}
                    onChange={(e) => {
                      setProfilePicture(e.target.value);
                    }}
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>

                <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                  Add User
                </button>
              </div>
            </div>
          </form>
          <div className="bg-white rounded-lg shadow-lg p-6 overflow-hidden  ">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              <span>All Users :</span> {allUsers.length}
            </h2>
            {allUsers.length == 0 ? (
              <p className="text-gray-500 none ">No users added yet.</p>
            ) : (
              <div className=" space-y-4 max-h-[390px] overflow-auto scrollbar-hide">
                {allUsers.map((user) => {
                  return (
                    <Card
                      key={user.id}
                      user={user}
                      allUsers={allUsers}
                      setAllUsers={setAllUsers}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
