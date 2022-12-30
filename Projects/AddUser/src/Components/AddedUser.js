import React from "react";
import * as userStyle from "./AddedUser.module.css";
import UserInfo from "./UserInfo";
const AddedUser = (props) => {
  const allusersList = props.renderUsers.map((user) => {
    return <UserInfo name={user.name} age={user.age} id={user.id} />;
  });
  return (
    <ul
      style={{
        listStyleType: "none",
      }}
    >
      {allusersList}
    </ul>
  );
};

export default AddedUser;
