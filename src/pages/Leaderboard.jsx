import { useState } from "react";
import ScoreTable from "../components/ScoreTable";
import LeaderboardButtons from "../components/LeaderboardButtons";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Leaderboard = () => {
  const [activeGame, setActiveGame] = useState("beach");

  const scoreQuery = useQuery({
    queryKey: ["score", activeGame],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/scores/${activeGame}`
      );
      return response.data;
    },
  });

  const handleClick = (game) => {
    setActiveGame(game);
  };

  return (
    <div className="w-full flex flex-col items-center gap-5">
      <h1 className="text-4xl">Leaderboard</h1>
      <LeaderboardButtons activeGame={activeGame} handleClick={handleClick} />
      {scoreQuery.isLoading && <p>Loading...</p>}
      {scoreQuery.isError && <p>Error: {scoreQuery.error}</p>}
      {scoreQuery.data && <ScoreTable data={scoreQuery.data} />}
    </div>
  );
};

export default Leaderboard;
