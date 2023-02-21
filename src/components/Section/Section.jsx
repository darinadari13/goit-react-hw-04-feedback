import PropTypes from 'prop-types';
import css from './Section.module.css';

function Section({ title }) {
  return <h1 className={css.title}>{title}</h1>;
}

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
