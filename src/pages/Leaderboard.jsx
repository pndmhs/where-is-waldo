import ScoreTable from "../components/ScoreTable";

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
  return (
    <div className="w-full flex flex-col items-center gap-5">
      <h1 className="text-4xl">Leaderboard</h1>
      <div className="flex gap-5">
        <button className="bg-[#373937] px-3 py-2 rounded-md">Beach</button>
        <button className="bg-[#373937] px-3 py-2 rounded-md">
          Ski Slopes
        </button>
        <button className="bg-[#373937] px-3 py-2 rounded-md">
          Track & Field
        </button>
      </div>
      <ScoreTable data={sampleScores} />
    </div>
  );
};

export default Leaderboard;
