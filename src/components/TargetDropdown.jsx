const TargetDropdown = ({ coordinate }) => {
  return (
    <div
      className="absolute flex flex-col items-center gap-2 py-2 w-[80px] bg-[#EE2725] rounded-md text-white"
      style={{
        left: `${coordinate.x - 80 / 2}px`,
        top: `${coordinate.y + 60 / 2}px`,
      }}
    >
      <button className="border border-white w-10/12 py-1 rounded-md">
        Waldo
      </button>
      <button className="border border-white w-10/12 py-1 rounded-md">
        Wizard
      </button>
      <button className="border border-white w-10/12 py-1 rounded-md">
        Odlaw
      </button>
      <button className="border border-white w-10/12 py-1 rounded-md">
        Wanda
      </button>
    </div>
  );
};

export default TargetDropdown;
