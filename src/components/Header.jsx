import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full max-w-screen-xl flex mx-auto py-5 mb-5">
      <div className="mr-auto">
        <h1>Where's Waldo</h1>
      </div>
      <nav className="flex gap-7">
        <Link>Home</Link>
        <Link>Leaderboard</Link>
      </nav>
    </header>
  );
};

export default Header;
