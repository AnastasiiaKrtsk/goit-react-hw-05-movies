// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.link}>
        Home
      </NavLink>
      <NavLink to="/movies" className={styles.link}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navbar;
