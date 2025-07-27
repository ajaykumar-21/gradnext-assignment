import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import CohortForm from "./sections/CohortForm";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <CohortForm />
    </div>
  );
}

export default App;
