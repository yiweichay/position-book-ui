import { NavLink } from "react-router-dom";
import './Navbar.css'; 

export const Navbar = () => {
  return (
    <header className="Navbar">
      <nav>
        <ul>
          <li>
            <NavLink to="position-summary">Position Summary</NavLink>
          </li>
          <li>
            <NavLink to="create-event">Create Event</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}