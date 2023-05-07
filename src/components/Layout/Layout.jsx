import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../../Loader/Loader';
import css from './Layout.module.css';

export default function Layout() {
  return (
    <>
      <header>
        <ul className={css.headerBox}>
          <li classNmae={css.headerList}>
            <Link className={css.headerLink} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={css.headerLink} to="/movies">
              Movies
            </Link>
          </li>
        </ul>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
