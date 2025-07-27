const Hero = () => {
  return (
    <section
      id="home"
      className="bg-white py-20 px-6 md:px-12 lg:px-24 flex flex-col-reverse md:flex-row items-center justify-between gap-10"
    >
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
          Launch Your Consulting Career with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            GradNext
          </span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          A structured cohort-based program to help you crack top-tier
          consulting offers — guided by experts.
        </p>
        <a
          href="#join-now"
          className="inline-block px-6 py-3 text-white bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 rounded-lg text-lg font-semibold transition duration-300"
        >
          Join the Cohort
        </a>
      </div>

      <div className="md:w-1/2">
        <img
          src="/assets/hero-image.svg"
          alt="GradNext illustration"
          className="w-full max-w-md mx-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
