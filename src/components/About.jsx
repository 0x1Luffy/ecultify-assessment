import Button from "./Button";
import Heading from "./Heading";

const About = () => {
  const cardsData = [
    {
      title: "Title 1",
      body: "Body text for the first card. Add main takeaway points, quotes, anecdotes, or even a very short story.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Title 2",
      body: "Body text for the second card. Add some other details here.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Title 3",
      body: "Body text for the third card. Add more insights or highlights here.",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto my-6">
      <div className="flex flex-col items-start">
        <Heading headingText={"Heading"} subheadingText={"Subheading"} />
      </div>
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden w-[1116px] h-[208px] my-4"
        >
          <div className="w-[160px] h-[160px] p-4">
            <img
              className="object-cover w-full h-full"
              src={card.image}
              alt={`Placeholder for ${card.title}`}
            />
          </div>

          <div className="w-full md:w-2/3 p-6 h-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {card.title}
            </h2>
            <p className="text-gray-600 mb-4">{card.body}</p>

            <div className="mt-4">
              <Button label={"Button"} isPrimary={false} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
