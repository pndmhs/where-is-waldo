import { Link } from "react-router-dom";
import games from "../utils/images";

const Home = () => {
  return (
    <>
      <h1 className="text-center mb-11 text-3xl font-semibold">
        Choose a game to play!
      </h1>
      <div className="flex w-full justify-between">
        {games.map((data, index) => (
          <Link
            to={`/game/${data.route}`}
            key={index}
            className="flex flex-col gap-3 items-center"
          >
            <div className="w-96 h-auto">
              <img src={data.thumbnail} alt={data.name} />
            </div>
            <h2 className="text-lg">{data.name}</h2>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
