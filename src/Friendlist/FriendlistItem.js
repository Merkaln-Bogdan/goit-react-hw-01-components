import React from "react";
import style from "./Friendlist.module.css";
export default function Friendlist({ friends }) {
  return friends.map((friend) => {
    const status = friend.isOnline ? style.online : style.offline;
    return (
      <li className={style.item} key={friend.id}>
        <span className={status}></span>
        <img
          className={style.avatar}
          src={friend.avatar}
          alt={friend.name}
          width="100"
        />
        <p className={style.name}>{friend.name}</p>
      </li>
    );
  });
}
