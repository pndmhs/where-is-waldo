const CorrectTarget = ({ coordinate }) => {
  return (
    <div
      className={`absolute w-[50px] h-[50px] rounded-full border-4 border-green-600`}
      style={{
        top: `${coordinate.y - 50 / 2}px`,
        left: `${coordinate.x - 50 / 2}px`,
      }}
    ></div>
  );
};

export default CorrectTarget;
