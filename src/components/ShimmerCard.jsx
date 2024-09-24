const ShimmerCard = ({ width = "w-full", height = "h-64" }) => {
  return (
    <div className={`bg-white shadow-md overflow-hidden ${width} ${height} animate-pulse rounded-lg`}>
      <div className={`bg-gray-200 ${height} flex justify-center items-center`}>
        <div className="w-3/4 h-3/4 bg-gray-300 rounded"></div>
      </div>
      <div className="p-4">
        <div className="bg-gray-200 h-4 mb-2 rounded w-3/4"></div>
        <div className="bg-gray-200 h-3 rounded w-full"></div>
      </div>
    </div>
  );
};

export default ShimmerCard;
