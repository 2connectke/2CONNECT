import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import "./Home.css";

import img1 from "../assets/community.jpg";
import img2 from "../assets/education.jpg";
import img3 from "../assets/environment.jpg";
import img4 from "../assets/healthcare.jpg";

const images = [img1, img2, img3, img4];

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
          <h2></h2>
          <p>
            Connect with meaningful volunteer opportunities. Build skills. 
            Transform communities. Be the change you want to see.
          </p>
        </div>
      </div>
    </div>
  );
}
