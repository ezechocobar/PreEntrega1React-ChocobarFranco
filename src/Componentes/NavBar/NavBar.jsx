import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <header>
            <h1>Tucson - Bartender</h1>

            <nav>
                <ul>
                    <li> Productos </li>
                    <li> Tragos </li>
                    <li> Nosotros </li>
                    <li> Contacto </li>
                </ul>
            </nav>

            <CartWidget />

        </header>
    )
}

export default NavBar