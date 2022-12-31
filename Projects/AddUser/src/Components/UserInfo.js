import React, { useState } from "react";
import * as infoStyle from "./UserInfo.module.css";
import UpdateWindow from "./UpdateWindow";
const UserInfo = (props) => {
  const [id, setID] = useState("");
  const handler = () => {
    props.ondelete(props.id);
  };
  const updateHandler = () => {
    setID(props.id);
  };
  // console.log(props);
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
        <button className={infoStyle["update-button"]} onClick={updateHandler}>
          Update
        </button>

        <UpdateWindow id={id} name={props.name} age={props.age} onUpdate={props.onupdate} />
      </div>
    </li>
  );
};

export default UserInfo;
