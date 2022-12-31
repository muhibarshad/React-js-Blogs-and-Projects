import React from "react";
import UserInfo from "./UserInfo";
const AddedUser = (props) => {
  const allusersList = props.renderUsers.map((user) => {
    console.log(user);
    return (
      <UserInfo
        name={user.name}
        age={user.age}
        id={user.id}
        ondelete={props.onDelete}
        onupdate={props.onUpdate}
      />
    );
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
