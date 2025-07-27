const features = [
  {
    title: "Structured Preparation",
    desc: "A step-by-step learning journey designed by top consultants to get you interview-ready.",
    icon: "📘",
  },
  {
    title: "1:1 Mentorship",
    desc: "Get personalized guidance from mentors who’ve cracked McKinsey, BCG, Bain, and more.",
    icon: "👨‍🏫",
  },
  {
    title: "Real Case Practice",
    desc: "Work on real consulting case problems with peer reviews and expert feedback.",
    icon: "💼",
  },
  {
    title: "Peer Cohort Network",
    desc: "Grow with a driven peer group and build accountability that accelerates your prep.",
    icon: "🤝",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="py-20 px-6 md:px-12 lg:px-24 bg-[#fffdf5] text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
        Why Join{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
          GradNext Cohort?
        </span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 border-t-4 border-yellow-400"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
