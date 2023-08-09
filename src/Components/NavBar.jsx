import { Link } from "react-router-dom";
import './Css/NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar">
        <h2>
            <Link to={`/`}>Blog.</Link>
        </h2>

        <ul>
            <li>
                <Link to={`/`}>Home</Link>
            </li>
            <li className="customBtn">
                <Link to={`/newProject`}>Novo Projeto</Link>
            </li>
        </ul>

    </div>
  )
}

export default NavBar