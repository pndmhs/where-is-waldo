const sampleData = [
  {
    name: "Beach",
  },
  {
    name: "Track and Field",
  },
  {
    name: "Ski Slopes",
  },
];

const Home = () => {
  return (
    <div className="flex w-full justify-between">
      {sampleData.map((data) => (
        <div className="flex flex-col gap-3 items-center">
          <div className="w-96 h-64 bg-neutral-400"></div>
          <h2>{data.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Home;
