import { NavLink } from "react-router-dom"


const MainNav = () => {
    return (
        <nav>
            <ul>
                <li> <NavLink to="/">Home</NavLink> </li>
                <li> <NavLink to="/contact">Contatti</NavLink> </li>
                <li> <NavLink to="/product">Prodotti</NavLink> </li>

            </ul>
        </nav>
    )
}

export default MainNav