import React from "react";
import User from "./User";

const Users = () => {
  const users = [
    {
      id: 1,
      name: "Rakesh Sharma",
      img: "https://picsum.photos/id/1/300/300",
      role: "Accountant",
    },
    {
      id: 2,
      name: "Milan Kunwar",
      img: "https://picsum.photos/id/2/300/300",
      role: "Designer",
    },
    {
      id: 3,
      name: "Bineet Joshi",
      img: "https://picsum.photos/id/3/300/300",
      role: "Programmer",
    },
    {
      id: 4,
      name: "Bishal Chaudhary",
      img: "https://picsum.photos/id/4/300/300",
      role: "UI Developer",
    },
    {
      id: 5,
      name: "Prasanna Karmacharya",
      img: "https://picsum.photos/id/5/300/300",
      role: "React Developer",
    },
  ];

  return (
    <div>
      {users.length > 0 ? (
        users.map((item) => <User user={item} name={"hello"} />)
      ) : (
        <div>No users found</div>
      )}
    </div>
  );
};

export default Users;
