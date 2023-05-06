import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
export default function Layout() {
  return (
    <>
      <header>
        <ul>
          <li>
            {' '}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
