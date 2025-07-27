import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import CohortForm from "./sections/CohortForm";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <CohortForm />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
