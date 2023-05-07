import PropTypes from 'prop-types';
import { ReactComponent as IconInput } from '../../Icons/searchIcon.svg';

export default function Searchbar({ onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange} />
      <button type="submit">
        Search
        <IconInput width="25px" height="25px" />
      </button>
    </form>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
