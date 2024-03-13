import axios from "axios";

const TargetDropdown = ({
  coordinate,
  target_characters,
  game_name,
  hideTargetSelect,
  correctTargets,
  setCorrectTargets,
}) => {
  const handleClick = async (target_character) => {
    try {
      const selectedTarget = {
        character: target_character,
        x: coordinate.x,
        y: coordinate.y,
      };

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/game/${game_name}/targets`,
        {
          targets: [...correctTargets, selectedTarget],
        }
      );
      console.log(response.data);
      setCorrectTargets([...correctTargets, selectedTarget]);
    } catch (err) {
      console.log(err);
    }

    hideTargetSelect();
  };

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
          onClick={() => handleClick(target)}
        >
          {target}
        </button>
      ))}
    </div>
  );
};

export default TargetDropdown;
