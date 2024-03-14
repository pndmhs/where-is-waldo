import games from "../utils/images";

const LeaderboardButtons = ({ activeGame, handleClick }) => {
  return (
    <div className="flex gap-5">
      {games.map((game, index) => (
        <button
          key={index}
          className={`${
            activeGame === game.route
              ? "bg-white text-[#373937] pointer-events-none"
              : "bg-[#373937]"
          } px-3 py-2 rounded-md hover:bg-[#484b48]`}
          onClick={() => handleClick(game.route)}
        >
          {game.name}
        </button>
      ))}
    </div>
  );
};

export default LeaderboardButtons;
