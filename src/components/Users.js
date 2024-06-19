import React from "react";

function Users() {
  const data = [
    {
      id: 1,
      name: "Ram",
    },
    {
      id: 2,
      name: "Bhim",
    },
    {
      id: 3,
      name: "Krishna",
    },
  ];
  return (
    <div>
      {data.map((user) => (
        <div>{user.name}</div>
      ))} 
    </div>
  );
}

export default Users;
