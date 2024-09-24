const Heading = ({ headingText, subheadingText }) => {
  return (
    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold">{headingText}</h1>
      <h2 className="text-xl font-semibold text-gray-600">{subheadingText}</h2>
    </div>
  );
};

export default Heading;
