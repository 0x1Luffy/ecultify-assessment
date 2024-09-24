const Heading = ({ headingText, subheadingText }) => {
  return (
    <div className="text-center mb-6">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">{headingText}</h1>
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-600">
        {subheadingText}
      </h2>
    </div>
  );
};

export default Heading;
