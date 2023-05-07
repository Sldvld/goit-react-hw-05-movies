import PropTypes from 'prop-types';

export default function Searchbar({ onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange} />
      <button type="submit">Search</button>
    </form>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
