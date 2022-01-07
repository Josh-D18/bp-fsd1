import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <>
      <header className="header">
        <ul className="header__links">
          <li className="header__link">
            <Link to="/">CREATE USER</Link>
          </li>
          <li className="header__link">
            <Link to="/listusers">LIST USERS</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
