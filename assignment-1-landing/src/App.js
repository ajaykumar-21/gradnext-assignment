import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Features from "./sections/Features";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
