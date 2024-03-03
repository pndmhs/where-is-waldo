import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-[#2A2B2A] text-white min-h-screen w-full">
      <Header />
      <main className="w-full max-w-screen-xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
