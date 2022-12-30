import React from "react";
import * as infoStyle from "./UserInfo.module.css";

const UserInfo = (props) => {
  const handler = () => {
    props.ondelete(props.id);
  };
  return (
    <li>
      <div className={infoStyle["user-info"]}>
        <p className={infoStyle.label}>Username:</p>
        <p>{props.name}</p>
        <p className={infoStyle.label}>Age:</p>
        <p>{props.age}</p>
        <button type="button" className={infoStyle.delete} onClick={handler}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default UserInfo;
