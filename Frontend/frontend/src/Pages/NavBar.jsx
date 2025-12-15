import "./Home.css";
import logo from "../assets/logo.jpg"; 

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="MyProject Logo" className="logo" />
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}