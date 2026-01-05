import React from "react";

const Card = ({ user, allUsers, setAllUsers }) => {
  console.log(user.profilePicture);
  const time = {
    day: new Date(user.id).getDate(),
    month: new Date(user.id).getMonth() + 1,
    year: new Date(user.id).getFullYear(),
    hours: new Date(user.id).getHours(),
    minutes: new Date(user.id).getMinutes(),
    seconds: new Date(user.id).getSeconds(),
  };
  const handleDelete = (id) => {
    const filtered = allUsers.filter((user) => {
      return user.id !== id;
    });
    setAllUsers(filtered);
    localStorage.setItem("users", JSON.stringify(filtered));
  };
  return (
    <>
      <div
        key={user.id}
        className="border  border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            {user.profilePicture ? (
              <img
                src={user.profilePicture}
                className="w-16 h-16 rounded-full object-cover"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-xl">
                {user.username.charAt(0).toUpperCase()}
              </div>
            )}
          </div>

          <div className="flex-grow">
            <h3 className="font-semibold text-gray-800 text-lg">
              {user.username}
            </h3>
            <p className="text-sm text-gray-600">{user.email}</p>
            <span className="inline-block mt-1 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">
              {user.role}
            </span>
            <p className="text-xs text-gray-400 mt-2">
              Added: {time.day}/{time.month}/{time.year}, {time.hours}:
              {time.minutes}:{time.seconds}
            </p>
          </div>

          <button
            onClick={() => {
              handleDelete(user.id);
            }}
            className="text-red-500 hover:text-red-700 font-medium text-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
