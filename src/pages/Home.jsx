import beachThumbnail from "../assets/beach_sm.jpg";
import skiSlopesThumbnail from "../assets/ski-slopes_sm.jpg";
import trackAndFieldThumbnail from "../assets/track-and-field_sm.jpg";

const sampleData = [
  {
    name: "Beach",
    imageUrl: beachThumbnail,
  },
  {
    name: "Track and Field",
    imageUrl: trackAndFieldThumbnail,
  },
  {
    name: "Ski Slopes",
    imageUrl: skiSlopesThumbnail,
  },
];

const Home = () => {
  return (
    <>
      <h1 className="text-center mb-11 text-3xl font-semibold">
        Choose a game to play!
      </h1>
      <div className="flex w-full justify-between">
        {sampleData.map((data) => (
          <div className="flex flex-col gap-3 items-center cursor-pointer">
            <div className="w-96 h-auto">
              <img src={data.imageUrl} alt={data.name} />
            </div>
            <h2 className="text-lg">{data.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
