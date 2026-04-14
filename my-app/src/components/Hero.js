const buttons = [
  { text: "Get Started", style: "bg-blue-600 text-white" },
  { text: "Learn More", style: "bg-gray-200 text-black" }
];

function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-10">

      {/* Left Text */}
      <div className="md:w-1/2 space-y-5">
        <h1 className="text-4xl font-bold">
          Build Amazing Websites with React
        </h1>

        <p className="text-gray-600">
          This is a modern hero section with React components and Tailwind CSS.
        </p>

        {/* Buttons from JS */}
        <div className="space-x-4">
          {buttons.map((btn, index) => (
            <button
              key={index}
              className={`px-5 py-2 rounded ${btn.style}`}
            >
              {btn.text}
            </button>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
          alt="hero"
          className="rounded-lg shadow-lg w-[400px]"
        />
      </div>

    </section>
  );
}

export default Hero;