import ShimmerCard from "./ShimmerCard";

const Section = () => {
  return (
    <div className="flex gap-20 justify-center h-screen">
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
  );
};

export default Section;
