import logo from "../assets/brand_logo.png";
import "./nav.css";

const Nav = () => {
  return (
    <nav className="nav container">
      <div className="nav--logo">
        <img src={logo} alt="brand logo" />
      </div>

      <ul className="nav--menu">
        <li className="nav--item">
          <a href="#" className="nav--link">
            Menu
          </a>
        </li>
        <li className="nav--item">
          <a href="#" className="nav--link">
            Location
          </a>
        </li>
        <li className="nav--item">
          <a href="#" className="nav--link">
            About
          </a>
        </li>
        <li className="nav--item">
          <a href="#" className="nav--link">
            Contact
          </a>
        </li>
      </ul>

      <div className="btn btn--primary">Login</div>
    </nav>
  );
};

export default Nav;
