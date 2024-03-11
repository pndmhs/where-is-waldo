import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import Game from "./pages/Game";
import Leaderboard from "./pages/Leaderboard";

function App() {
  return (
    <div className="bg-[#2A2B2A] text-white min-h-screen w-full font-inter overflow-x-hidden">
      <Header />
      <main className="w-full max-w-screen-xl mx-auto py-12 px-5 xl:px-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:name" element={<Game />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
