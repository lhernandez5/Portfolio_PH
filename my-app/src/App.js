import React from "react";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

export default function App() {
  return (
    <main>
      <Navbar/>
      <About/>
      <Projects/>
    </main>
  );
}

// export default App;
