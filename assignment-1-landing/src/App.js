import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
