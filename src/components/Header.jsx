import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full max-w-screen-xl flex mx-auto py-5 mb-5 items-center">
      <div className="mr-auto">
        <h1 className="text-2xl font-bold">Where's Waldo</h1>
      </div>
      <nav className="flex gap-7 font-medium">
        <Link>Home</Link>
        <Link>Leaderboard</Link>
      </nav>
    </header>
  );
};

export default Header;
