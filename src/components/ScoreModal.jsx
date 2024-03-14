import { useNavigate } from "react-router-dom";

const ScoreModal = ({ time_score }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed w-full h-full flex justify-center items-center bg-black/50 top-0 left-0">
      <div className="px-8 py-7 rounded-md bg-[#373937] text-neutral-200">
        <h1 className="text-2xl font-semibold text-white">
          You finished the game in {time_score.toFixed(3)}s!
        </h1>
        <p className="mb-5">Submit your score to the Leaderboard</p>
        <form className="flex flex-col gap-3">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            className="p-2 rounded-md bg-[#373937] border border-neutral-400 outline-none focus:border-white"
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="py-2 rounded-md bg-white text-black grow"
            >
              Submit
            </button>
            <button
              className="py-2 rounded-md bg-[#373937] border border-neutral-400 grow"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScoreModal;
