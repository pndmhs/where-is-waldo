import { useParams } from "react-router-dom";
import games from "../utils/images";
import ImageMagnifier from "../components/ImageMagnifier";
import { useState } from "react";
import TargetSelect from "../components/TargetSelect";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CorrectTarget from "../components/CorrectTarget";
import ScoreModal from "../components/ScoreModal";

const Game = () => {
  const { name } = useParams();
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });
  const [showTarget, setShowTarget] = useState(false);
  const [correctTargets, setCorrectTargets] = useState([]);
  const [score, setScore] = useState(null);

  const gameQuery = useQuery({
    queryKey: ["games"],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/game/${name}`
      );
      sessionStorage.setItem("token", JSON.stringify(response.data.token));
      return response.data;
    },
    enabled: false,
  });

  const game = games.find((item) => item.route === name);

  const handleClick = (e) => {
    const elem = e.currentTarget;
    const { top, left } = elem.getBoundingClientRect();
    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;

    setCoordinate({ x, y });
    setShowTarget(true);
  };

  const handleImageLoad = () => {
    gameQuery.refetch();
  };

  const handleTargetClick = async (target_character) => {
    try {
      const selectedTarget = {
        character: target_character,
        x: coordinate.x,
        y: coordinate.y,
      };

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/game/${name}/targets`,
        {
          targets: [...correctTargets, selectedTarget],
          token: JSON.parse(sessionStorage.getItem("token")),
        }
      );
      setCorrectTargets([...correctTargets, selectedTarget]);

      if (response.data.finished) {
        setScore(response.data.time_score.seconds);
      }
    } catch (err) {
      console.log(err);
    }

    setShowTarget(false);
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
          handleTargetClick={handleTargetClick}
        />
      )}
      {correctTargets.map((target, index) => (
        <CorrectTarget key={index} coordinate={{ x: target.x, y: target.y }} />
      ))}

      {score && <ScoreModal time_score={score} game_name={name} />}
    </div>
  );
};

export default Game;
