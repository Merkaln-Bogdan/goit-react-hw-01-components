import React, { Fragment } from "react";
import style from "./Friendlist.module.css";
import PropTypes from "prop-types";

function FriendList({ friends }) {
  return (
    <Fragment>
      <ul className={style.friendList}>
        {friends.map((friend) => {
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
        })}
      </ul>
    </Fragment>
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
