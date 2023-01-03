import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <nav>
        <ul className="flex items-center justify-between ">
          <li>
            <NavLink to="/">خانه</NavLink>
          </li>
          <li>
            <NavLink to="/products">محصولات</NavLink>
          </li>
          <li>
            <NavLink to="/aboutUs">درباره ما</NavLink>
          </li>
          <li>
            <NavLink to="/velog">ولاگ</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
