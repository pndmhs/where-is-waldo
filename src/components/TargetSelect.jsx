import TargetDropdown from "./TargetDropdown";

const TargetSelect = ({ coordinate }) => {
  return (
    <>
      <div
        className={`absolute w-[50px] h-[50px] rounded-full border-4 border-red-500`}
        style={{
          top: `${coordinate.y - 50 / 2}px`,
          left: `${coordinate.x - 50 / 2}px`,
        }}
      ></div>
      <TargetDropdown coordinate={coordinate} />
    </>
  );
};

export default TargetSelect;
