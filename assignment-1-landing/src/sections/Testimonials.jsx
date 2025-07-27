import { Star } from "lucide-react"; // optional icon import (Lucide or use your icon library)

const testimonials = [
  {
    name: "Aarav Mehta",
    feedback:
      "GradNext gave me the exact structure I needed. I cracked two consulting offers with their help!",
    company: "Joined BCG",
    avatar: "https://i.pravatar.cc/100?img=11",
  },
  {
    name: "Riya Sharma",
    feedback:
      "The mentorship and case practice were game-changing. I felt confident and ready for interviews.",
    company: "Joined McKinsey",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Dev Patel",
    feedback:
      "The cohort model made me stay accountable. The peer reviews and expert feedback were top-notch!",
    company: "Joined Bain",
    avatar: "https://i.pravatar.cc/100?img=45",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-white py-20 px-6 md:px-12 lg:px-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
        What Our{" "}
        <span className="bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">
          Alumni Say
        </span>
      </h2>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-12 text-sm md:text-base">
        Real stories from past participants who cracked top-tier consulting
        offers.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="border border-orange-200 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-14 h-14 rounded-full border-2 border-orange-500"
              />
              <div>
                <p className="font-semibold text-gray-800">{item.name}</p>
                <p className="text-sm text-orange-600 font-medium">
                  {item.company}
                </p>
              </div>
            </div>
            <div className="flex gap-1 text-orange-500 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              “{item.feedback}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
