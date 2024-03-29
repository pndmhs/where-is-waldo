import TargetDropdown from "./TargetDropdown";

const TargetSelect = ({ coordinate, target_characters, handleTargetClick }) => {
  return (
    <>
      <div
        className={`absolute w-[50px] h-[50px] rounded-full border-4 border-red-500`}
        style={{
          top: `${coordinate.y - 50 / 2}px`,
          left: `${coordinate.x - 50 / 2}px`,
        }}
      ></div>
      <TargetDropdown
        coordinate={coordinate}
        target_characters={target_characters}
        handleTargetClick={handleTargetClick}
      />
    </>
  );
};

export default TargetSelect;
