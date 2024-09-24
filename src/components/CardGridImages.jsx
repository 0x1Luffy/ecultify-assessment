import Heading from "./Heading";

const Card = ({ title, body }) => {
  return (
    <div className="flex flex-col bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden w-[325px] h-[357px] p-4 mb-4">
      {/* Image Placeholder */}
      <div className="w-[160px] h-[160px] bg-gray-100 mb-4">
        <img
          className="object-cover w-full h-full"
          src="https://via.placeholder.com/150"
          alt="Placeholder"
        />
      </div>
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600">{body}</p>
      </div>
    </div>
  );
};

const CardGridImages = () => {
  const cardsData = [
    {
      title: "Title 1",
      body: "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. ",
    },
    {
      title: "Title 2",
      body: "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. ",
    },
    {
      title: "Title 3",
      body: "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. ",
    },
    {
      title: "Title 4",
      body: "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. ",
    },
    {
      title: "Title 5",
      body: "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. ",
    },
    {
      title: "Title 6",
      body: "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. ",
    },
  ];

  return (
    <div className="h-screen flex flex-col items-start mx-auto max-w-7xl p-4">
      <div className="max-w-xl my-10">
        <Heading headingText={"Heading"} subheadingText={"Subheading"} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 justify-between">
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} body={card.body} />
        ))}
      </div>
    </div>
  );
};

export default CardGridImages;
