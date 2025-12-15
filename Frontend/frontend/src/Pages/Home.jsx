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
          <h1> Your <span className="highlight">Action</span>. Your{" "}
               <span className="highlight">Impact</span>.
          </h1>
          <p>
            Connect with meaningful volunteer opportunities. Build skills. 
            Transform communities. Be the change you want to see.
          </p>
        </div>
      </div>

{/* Who we are */}
   <section className="who-we-are">

 
  <h2 className="section-title">Who We Are</h2>

  <div className="who-container">

   
    <div className="who-text">
      <h3>A Movement of Young Changemakers.</h3>
      <p>
        2Connect is more than a volunteer platform, it's a community. Based in
        Kenya, we connect passionate young people across the nation with
        meaningful opportunities to serve, learn and grow together.
        <br /><br />
        Founded on the belief that every young Kenyan has the power to make a
        difference, we've built a movement that turns individual actions into
        collective impact. From local community projects in Nairobi to
        initiatives across all 47 counties, we're creating pathways for youth
        to lead change.
      </p>

 {/* Learn More button */}
     <button
  className="learn-more-btn"
  onClick={() => navigate("/About")} 
>
  Learn More
</button>
</div>
   
    <div className="who-image">
      <img src={img1} alt="2Connect community volunteering" />
    </div>

  </div>
</section>



    </div>


   


    
  );
}
