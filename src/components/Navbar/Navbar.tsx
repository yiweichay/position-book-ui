import { Link } from "react-router-dom";
import './Navbar.css'; 

export const Navbar = () => {
  return (
    <header className="Navbar">
      <nav>
        <ul>
          <li>
            <Link to="position-summary">Position Summary</Link>
          </li>
          <li>
            <Link to="create-event">Create Event</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}