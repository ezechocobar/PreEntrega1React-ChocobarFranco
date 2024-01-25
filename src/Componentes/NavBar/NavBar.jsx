import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <header>
            <Link to="/">
            <h1>Tucson - Bartender</h1>
            </Link>

            <nav>
                <ul>
                    <li>
                        <NavLink to="/categoria/2">
                            Productos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/categoria/3">
                            Tragos
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <CartWidget />

        </header>
    )
}

export default NavBar