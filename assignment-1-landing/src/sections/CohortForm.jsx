import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const CohortForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const validate = () => {
    const { name, email, phone } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (name.trim().length < 2) {
      toast.error("Name must be at least 2 characters");
      return false;
    }
    if (!emailRegex.test(email)) {
      toast.error("Invalid email address");
      return false;
    }
    if (!phoneRegex.test(phone)) {
      toast.error("Phone must be 10 digits");
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      await axios.post(
        "https://gradnext-assignment.onrender.com/api/cohort/submit",
        formData
      );

      toast.success("✅ Form submitted successfully!");
      setFormData({ name: "", email: "", phone: "" });
    } catch (error) {
      toast.error("❌ Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="join-now" className="bg-white py-20 px-6 md:px-12 lg:px-24">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Join the{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
          Next Cohort
        </span>
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow border border-yellow-100"
      >
        <div className="mb-6">
          <label className="block font-semibold mb-2 text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2 text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2 text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            pattern="[0-9]{10}"
            placeholder="10-digit mobile number"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
        >
          {loading ? "Submitting..." : "Submit Interest"}
        </button>
      </form>
    </section>
  );
};

export default CohortForm;
