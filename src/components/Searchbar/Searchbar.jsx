import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export default function Searchbar({ onChange, onSubmit, query }) {
  return (
    <form className={css.form} onSubmit={onSubmit}>
      <input
        className={css.searchInput}
        defaultValue={query}
        type="text"
        onChange={onChange}
      />
      <button className={css.searchButton} type="submit">
        Search
      </button>
    </form>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
