import { useState } from "react";
import ScoreTable from "../components/ScoreTable";
import LeaderboardButtons from "../components/LeaderboardButtons";

const sampleScores = [
  {
    username: "palmer20",
    time_score: "35s",
  },
  {
    username: "gusto27",
    time_score: "40s",
  },
  {
    username: "enzo5",
    time_score: "45s",
  },
];

const Leaderboard = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  return (
    <div className="w-full flex flex-col items-center gap-5">
      <h1 className="text-4xl">Leaderboard</h1>
      <LeaderboardButtons
        activeButton={activeButton}
        handleClick={handleClick}
      />
      <ScoreTable data={sampleScores} />
    </div>
  );
};

export default Leaderboard;
