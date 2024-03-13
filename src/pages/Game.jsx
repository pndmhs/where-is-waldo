import { useParams } from "react-router-dom";
import gameImages from "../utils/images";
import ImageMagnifier from "../components/ImageMagnifier";
import { useState } from "react";
import TargetSelect from "../components/TargetSelect";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CorrectTarget from "../components/CorrectTarget";

const Game = () => {
  const { name } = useParams();
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });
  const [showTarget, setShowTarget] = useState(false);
  const [correctTargets, setCorrectTargets] = useState([]);

  const gameQuery = useQuery({
    queryKey: ["games"],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/game/${name}`
      );
      console.log(response.data);
      sessionStorage.setItem("token", JSON.stringify(response.data.token));
      return response.data;
    },
    enabled: false,
  });

  const game = gameImages.find((item) => item.route === name);

  const handleClick = (e) => {
    const elem = e.currentTarget;
    const { top, left } = elem.getBoundingClientRect();
    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;

    console.log(`Coordinates: (${x}, ${y})`);
    setCoordinate({ x, y });
    setShowTarget(true);
  };

  const handleImageLoad = () => {
    gameQuery.refetch();
  };

  return (
    <div className="w-full h-auto relative">
      <ImageMagnifier
        src={game.image}
        handleClick={handleClick}
        onLoadImage={handleImageLoad}
      />
      {showTarget && (
        <TargetSelect
          coordinate={coordinate}
          target_characters={gameQuery.data.targets}
          game_name={name}
          hideTargetSelect={() => setShowTarget(false)}
          correctTargets={correctTargets}
          setCorrectTargets={setCorrectTargets}
        />
      )}
      {correctTargets.map((target, index) => (
        <CorrectTarget key={index} coordinate={{ x: target.x, y: target.y }} />
      ))}
    </div>
  );
};

export default Game;
