import { NavLink, Outlet } from 'react-router-dom';
const styles = ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none'});

function Nav() {
  return (
    <main>
        <header>
            <nav>
                <NavLink to="/" style={styles}>Home</NavLink>
                <NavLink to="/characters" style={styles}>Search characters</NavLink>
            </nav>
        </header>
        <Outlet />
    </main>
  )
}

export default Nav;