import { Link } from "react-router-dom";
import "./Header.css";
import logoImage from "../../assets/image/exclusive-logo.png";
import searchIcon from "../../assets/icons/search-icon.svg";
import likeIcon from "../../assets/icons/like-icon.svg";
import basketIcon from "../../assets/icons/basket-icon.svg";

function Header() {
  return (
    <header>
      <img src={logoImage} alt="Exclusive logo image" />

      <nav>
        <ul className="nav-list">
          <li className="nav-list__item">
            <Link to="/">Home</Link>
          </li>

          <li className="nav-list__item">
            <Link to="/contact">Contact</Link>
          </li>

          <li className="nav-list__item">
            <Link to="/about">About</Link>
          </li>

          <li className="nav-list__item">
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>

      <div className="header-actions">
        <div className="input-box">
          <input type="text" placeholder="What are you looking for" />
          <img src={searchIcon} alt="" />
        </div>

        <Link to="/like">
          <img src={likeIcon} alt="Like icon image" />
        </Link>

        <Link to="/basket">
          <img src={basketIcon} alt="Basket icon image" />
        </Link>
      </div>
    </header>
  );
}

export default Header;