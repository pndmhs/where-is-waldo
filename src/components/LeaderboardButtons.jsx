const buttonTexts = ["Beach", "Ski Slopes", "Track & Field"];

const LeaderboardButtons = ({ activeButton, handleClick }) => {
  return (
    <div className="flex gap-5">
      {buttonTexts.map((text, index) => (
        <button
          key={index}
          className={`${
            activeButton === index
              ? "bg-white text-[#373937] pointer-events-none"
              : "bg-[#373937]"
          } px-3 py-2 rounded-md hover:bg-[#484b48]`}
          onClick={() => handleClick(index)}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default LeaderboardButtons;
