import React from "react";
import * as infoStyle from "./UserInfo.module.css";

const UserInfo = (props) => {
  return (
    <li>
      <div className={infoStyle["user-info"]}>
        <p className={infoStyle.label}>Username:</p>
        <p>{props.name}</p>
        <p className={infoStyle.label}>Age:</p>
        <p>{props.age}</p>
      </div>
    </li>
  );
};

export default UserInfo;
