// import data from './data.json';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function renderRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({title, stats}) => {
  return (
    <section className={css.statistics}>
  {title && <h2 className={css.title}>{title}</h2>}

  <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={css.item}
              key={id}
              style={{backgroundColor: renderRandomColor()}}

            >
              <span className={css.label}>{ label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          )
        })}
  </ul>
</section>

  )
}
Statistics.propType = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number
  }).isRequired
};