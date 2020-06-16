import React from "react";
import style from "./Friendlist.module.css";
import FriendListItem from "./FriendlistItem.js";
import PropTypes from "prop-types";

function FriendList({ friends }) {
  return (
    <ul className={style.friendList}>
      <FriendListItem friends={friends} />
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default FriendList;
