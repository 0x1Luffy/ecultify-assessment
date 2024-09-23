import Button from './Button';

const Hero = () => {
  return (
    <div className="mb-20"> 
      <section className="text-center bg-gray-100 h-screen flex flex-col justify-center">
        <h1 className="text-9xl font-bold mb-2">Title</h1>
        <p className="text-6xl text-gray-600 mb-6">Subtitle</p>

        <div className="space-x-4">
          {/* Use the same Button component with different styling */}
          <Button label="Button" isPrimary={false} className="text-gray-600 border-gray-600" size="large" />
          <Button label="Button" isPrimary={true} size="large" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
