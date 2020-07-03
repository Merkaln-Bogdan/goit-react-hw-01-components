import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import TransactionHistory from "./Transaction/Transaction";
import transactions from "./Transaction/transactions.json";
import user from "./user/user.json";
import statisticalData from "./statistics/statistical-data.json";
import friends from "./Friendlist/friends.json";
import Profile from "./user/Profile";
import FriendList from "./Friendlist/Friendlist";
import Statistics from "./statistics/statistics";

ReactDOM.render(
  <Fragment>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </Fragment>,
  document.getElementById("root")
);
