import { useParams } from "react-router-dom";
import gameImages from "../utils/images";
import ImageMagnifier from "../components/ImageMagnifier";
import { useState } from "react";
import TargetSelect from "../components/TargetSelect";

const Game = () => {
  const { name } = useParams();
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });
  const [showTarget, setShowTarget] = useState(false);

  const game = gameImages.find((item) => item.route === name);

  const handleClick = (e) => {
    console.log(`Coordinates: (${e.clientX}, ${e.clientY})`);

    const elem = e.currentTarget;
    const { top, left } = elem.getBoundingClientRect();
    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;

    setCoordinate({ x, y });
    setShowTarget(true);
  };

  return (
    <div className="w-full h-auto relative">
      <ImageMagnifier src={game.image} handleClick={handleClick} />
      {showTarget && <TargetSelect coordinate={coordinate} />}
    </div>
  );
};

export default Game;
