import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-[#373937] py-4 px-5">
      <div className="max-w-screen-xl flex mx-auto items-center">
        <div className="mr-auto">
          <Link to="/" className="text-2xl font-bold text-[#EE2725]">
            Where's <span className="text-white">Waldo?</span>
          </Link>
        </div>
        <nav>
          <ul className="flex gap-7 font-medium">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink>Leaderboard</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
