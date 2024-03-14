import axios from "axios";

const TargetDropdown = ({
  coordinate,
  target_characters,
  handleTargetClick,
}) => {
  return (
    <div
      className="absolute flex flex-col items-center gap-2 py-2 w-[80px] bg-[#EE2725] rounded-md text-white"
      style={{
        left: `${coordinate.x - 80 / 2}px`,
        top: `${coordinate.y + 60 / 2}px`,
      }}
    >
      {target_characters.map((target, index) => (
        <button
          key={index}
          className="border border-white w-10/12 py-1 rounded-md hover:bg-white hover:text-[#EE2725]"
          onClick={() => handleTargetClick(target)}
        >
          {target}
        </button>
      ))}
    </div>
  );
};

export default TargetDropdown;
