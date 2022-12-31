import React, { useState, useEffect } from "react";
import AddUserForm from "./Components/AddUserForm";
import AddedUser from "./Components/AddedUser";
import * as appStyle from "./App.module.css";
const usersList = [];

const App = () => {
  const [listOfUsers, updatedListOfusers] = useState(() => {
    try {
      const item = window.localStorage.getItem("users");
      return item ? JSON.parse(item) : usersList;
    } catch (error) {
      console.log(error);
      return usersList;
    }
  });

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


  const onUpdateHandler = (updatedUser) => {
    const updatedUsers = listOfUsers.map((user) => {
      if (user.id === updatedUser.id) {
        user.name = updatedUser.name;
        user.age = updatedUser.age;
      }
      return user;
    });
    updatedListOfusers(updatedUsers);
  };


  useEffect(() => {
    try {
      window.localStorage.setItem("users", JSON.stringify(listOfUsers));
    } catch (error) {
      // console.log(error);
    }
  }, [listOfUsers]);
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
      <AddedUser
        renderUsers={listOfUsers}
        onDelete={onDeleteHandler}
        onUpdate={onUpdateHandler}
      />
    </div>
  );
};

export default App;
