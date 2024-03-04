import { useParams } from "react-router-dom";
import gameImages from "../utils/images";

const Game = () => {
  const { name } = useParams();

  const game = gameImages.find((item) => item.route === name);
  console.log(game);

  return (
    <div className="w-full h-auto">
      <img src={game.image} />
    </div>
  );
};

export default Game;
