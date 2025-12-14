import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import "./Home.css";

const images = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-page">
      <NavBar />

      <div
        className="carousel"
        style={{ backgroundImage: `url(${images[current]})` }}
      >
        <div className="overlay" />

        <div className="content">
          <h2>Welcome to My Project</h2>
          <p>
            This homepage uses a background image carousel with a simple
            explanation layered on top.
          </p>
        </div>
      </div>
    </div>
  );
}
