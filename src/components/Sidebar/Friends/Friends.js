import React from "react";
import Friend from "./Friend/Friend";
import styles from "./Friends.module.css";

const Friends = (props) => {
  const friendsList = props.state.map((friend, id) => {
    return <Friend id={id} avatar={friend.avatar} name={friend.name} />;
  });

  return <div>{friendsList}</div>;
};

export default Friends;
