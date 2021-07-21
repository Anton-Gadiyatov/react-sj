import React from "react";
import Friend from "./Friend/Friend";
import styles from "./Friends.module.css";

const Friends = (props) => {
  const friendsList = props.state.map((friend) => {
    return <Friend id={friend.id} avatar={friend.avatar} name={friend.name} />;
  });
  return <div className={styles.friends}>{friendsList}</div>;
};

export default Friends;
