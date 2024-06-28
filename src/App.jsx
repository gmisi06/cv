import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Profile from "./components/Profile";
import Content from "./components/Content";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="lg:h-screen bg-slate-950 flex flex-col lg:flex-row gap-14 py-16 px-5 max-w-5xl mx-auto lg:overflow-hidden">
      <Profile />
      <Content />
    </div>
  );
}

export default App;
