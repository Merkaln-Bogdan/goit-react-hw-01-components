import React from "react";
import style from "./statistics.module.css";
import PropTypes from "prop-types";
function Statistics({ stats }) {
  return (
    <section className={style.statistic}>
      <ul className={style.statlist}>
        {stats.map((stat) => (
          <li key={stat.id} className={style.item}>
            <span className={style.label}>{stat.label}</span>
            <span className={style.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
