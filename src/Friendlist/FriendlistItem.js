import React from "react";
import style from "./Friendlist.module.css";
import PropTypes from "prop-types";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const status = isOnline ? style.online : style.offline;
  return (
    <li className={style.item}>
      <span className={status}></span>
      <img className={style.avatar} src={avatar} alt={name} width="100" />
      <p className={style.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;
