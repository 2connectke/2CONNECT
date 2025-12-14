import "./Home.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">MyProject</h1>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}