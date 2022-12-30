import React, { useState } from "react";
import AddUserForm from "./Components/AddUserForm";
import AddedUser from "./Components/AddedUser";
import * as appStyle from "./App.module.css";
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
  const onDeleteHandler = (id) => {
    const filteredUsers = listOfUsers.filter((user) => user.id !== id);
    updatedListOfusers(filteredUsers);
  };
  const deleteAllHandler = () => {
    updatedListOfusers([]);
  };
  return (
    <div className={appStyle.App}>
      <h1>Add User App</h1>
      <AddUserForm addUserInList={updatedusersHandler} />
      {listOfUsers.length !== 0 && (
        <button
          type="button"
          class={appStyle["delete-all"]}
          onClick={deleteAllHandler}
        >
          Delete All
        </button>
      )}
      <AddedUser renderUsers={listOfUsers} onDelete={onDeleteHandler} />
    </div>
  );
};

export default App;
