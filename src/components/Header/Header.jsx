import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        Movie Hub
      </NavLink>

      <nav className={styles.nav}>
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
export default Header;
