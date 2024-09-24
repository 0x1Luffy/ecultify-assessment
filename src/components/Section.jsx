import ShimmerCard from "./ShimmerCard";
import QuoteCard from "./QuoteCard";
import quotes from "../quotesData";
import Heading from "./Heading";

const Section = () => {
  return (
    <div className="h-screen flex flex-col items-center">
      <div className="flex gap-20 justify-center mb-28">
        <ShimmerCard
          img="https://via.placeholder.com/300"
          width="w-[512px]"
          height="h-[350px]"
        />
        <ShimmerCard
          img="https://via.placeholder.com/300"
          width="w-[512px]"
          height="h-[350px]"
        />
      </div>
      <div className=" flex w-full max-w-7xl">
            <Heading headingText={"Heading"} subheadingText={"Subheading"} />
          </div>
      <div className="flex flex-col w-full items-center px-4 sm:px-10 md:px-20 lg:px-28">
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {quotes.map((quote) => (
            <div key={quote.id} className="flex-shrink-0 w-1/4 p-2">
              <QuoteCard
                quote={quote.quote}
                title={quote.title}
                description={quote.description}
                imageUrl={quote.imageUrl}
                height="147px"
                width="334px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
