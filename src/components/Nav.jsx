import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header className="shadow-lg mb-6 w-screen h-12 flex items-center justify-center">
      <nav className="md:px-28 container flex justify-between items-center ">
        <ul className="flex items-center justify-between gap-x-4 ">
          <li>
            <NavLink to="/">خانه</NavLink>
          </li>
          <li>
            <NavLink to="/products">محصولات</NavLink>
          </li>
          <li>
            <NavLink to="/aboutUs">درباره ما</NavLink>
          </li>
        </ul>
        <ul className="flex items-center justify-between gap-x-4 ">
          <li>
            <NavLink to="/cart">سبد خرید</NavLink>
          </li>
          <li>
            <NavLink to="/">ثبت نام/ورود</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
