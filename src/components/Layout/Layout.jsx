import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../Loader/Loader';
import css from './Layout.module.css';

export default function Layout() {
  return (
    <>
      <header>
        <ul className={css.headerBox}>
          <li className={css.headerList}>
            <NavLink className={css.headerLink} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={css.headerLink} to="/movies">
              Movies
            </NavLink>
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
