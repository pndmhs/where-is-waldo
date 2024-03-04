import { useParams } from "react-router-dom";
import gameImages from "../utils/images";
import ImageMagnifier from "../components/ImageMagnifier";

const Game = () => {
  const { name } = useParams();

  const game = gameImages.find((item) => item.route === name);

  const handleClick = (e) => {
    console.log(`Coordinates: (${e.clientX}, ${e.clientY})`);
  };

  return (
    <div className="w-full h-auto">
      <ImageMagnifier src={game.image} handleClick={handleClick} />
    </div>
  );
};

export default Game;
