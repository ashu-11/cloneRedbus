import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import journeyContext from "./context/userJourneyContext";
import Results from "./components/Results";

export default function App() {
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");

  return (
    <BrowserRouter>
      <journeyContext.Provider
        value={{ from: from, to: to, setFrom: setFrom, setTo: setTo }}
      >
        <div className="App">
          <Toaster position="bottom-right" reverseOrder={false} />

          <NavBar />
          <SearchBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </div>
      </journeyContext.Provider>
    </BrowserRouter>
  );
}
