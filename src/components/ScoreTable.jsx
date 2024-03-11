const ScoreTable = ({ data }) => {
  return (
    <table className="rounded-lg table-auto w-full max-w-[750px] bg-[#313531] border-spacing-0 border-separate overflow-hidden">
      <thead className="text-left bg-[#3e413e]">
        <tr>
          <th className="py-4 px-6">Place</th>
          <th className="py-4 px-6">Username</th>
          <th className="py-4 px-6">Time</th>
          <th className="py-4 px-6">Date</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className="py-4 px-6">{index + 1}</td>
            <td className="py-4 px-6">{item.username}</td>
            <td className="py-4 px-6">{item.time_score}</td>
            <td className="py-4 px-6">-</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ScoreTable;
