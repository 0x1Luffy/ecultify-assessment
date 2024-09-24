const QuoteCard = ({ quote, title, description, imageUrl, height, width }) => {
  return (
    <div
      className={`border rounded-lg shadow-lg p-4 flex items-center`}
      style={{ height: height, width: width }}
    >
      <div className="mr-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>
      <div>
        <p className="text-xl font-bold mb-2">"{quote}"</p>
        <h3 className="text-gray-800 font-semibold">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default QuoteCard;
