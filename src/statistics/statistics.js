import React from "react";
import statistic from "./statistical-data.json";
import style from "./statistics.module.css";
import PropTypes from "prop-types";
function Statistics() {
  return (
    <section className={style.statistic}>
      <h2 className={style.title}>Upload stats</h2>

      <ul className={style.statlist}>
        {statistic.map((stats) => (
          <li key={stats.id} className={style.item}>
            <span className={style.label}>{stats.label}</span>
            <span className={style.percentage}>{stats.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
