import React, { useState } from "react";
import AddUserForm from "./Components/AddUserForm";
import AddedUser from "./Components/AddedUser";

const usersList = [
  {
    id: "1",
    name: "Muhib",
    age: 18,
  },
  {
    id: "2",
    name: "Ali",
    age: 19,
  },
  {
    id: "3",
    name: "Hamza",
    age: 20,
  },
];

const App = (props) => {
  const [listOfUsers, updatedListOfusers] = useState(usersList);

  const updatedusersHandler = (addedUser) => {
    console.log(addedUser);
    updatedListOfusers([addedUser, ...listOfUsers]);
  };

  return (
    <div
      style={{
        height: "200vh",
      }}
    >
      <AddUserForm addUserInList={updatedusersHandler} />
      <AddedUser renderUsers={listOfUsers} />
    </div>
  );
};

export default App;
