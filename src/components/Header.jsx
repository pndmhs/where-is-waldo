import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full max-w-screen-xl flex mx-auto py-5 mb-5 items-center">
      <div className="mr-auto">
        <Link to="/" className="text-2xl font-bold">
          Where's Waldo
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
    </header>
  );
};

export default Header;
