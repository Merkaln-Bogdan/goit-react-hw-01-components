import React from "react";
import style from "./Transaction.module.css";
import PropTypes from "prop-types";
function TransactionHistory({ items }) {
  return (
    <table className={style.transactionHistory}>
      <thead>
        <tr className={style.headerBox}>
          <th className={style.headerBox}>Type</th>
          <th className={style.headerBox}>Amount</th>
          <th className={style.headerBox}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((trans) => (
          <tr className={style.styleRow} key={trans.id}>
            <td className={style.box}>{trans.type}</td>
            <td className={style.box}>{trans.amount}</td>
            <td className={style.box}>{trans.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
