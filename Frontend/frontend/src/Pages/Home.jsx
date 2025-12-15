import { FaHandsHelping, FaHeartbeat, FaCertificate, FaUniversity, FaGlobe } from "react-icons/fa";


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

{/* What we offer */}
<section className="what-we-offer">
  <h2 className="section-title">What We Offer</h2>

  <div className="offer-cards">

    {/* Card 1 */}
    <div className="offer-card">
      <div className="card-inner">
        <div className="card-front">
          <FaHandsHelping className="card-icon" />
          <h3>500+ Active Opportunities</h3>
        </div>
        <div className="card-back">
          <h4>Volunteer Matching Platform</h4>
          <p>
            AI-powered matching connects you with opportunities that fit your skills, interests, and schedule. Find your perfect volunteer role in minutes.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="offer-card">
      <div className="card-inner">
        <div className="card-front">
          <FaHeartbeat className="card-icon" />
          <h3>Free Wellness Support</h3>
        </div>
        <div className="card-back">
          <h4>Connect+ Wellness</h4>
          <p>
            Your mental health matters. Access wellness resources, peer support, and self-care tools designed for young volunteers.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="offer-card">
      <div className="card-inner">
        <div className="card-front">
          <FaCertificate className="card-icon" />
          <h3>20+ Certifications</h3>
        </div>
        <div className="card-back">
          <h4>Training Academy</h4>
          <p>
            Level up your skills with free training programs. From leadership to project management, we've got you covered.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </div>

    {/* Card 4 */}
    <div className="offer-card">
      <div className="card-inner">
        <div className="card-front">
          <FaUniversity className="card-icon" />
          <h3>100+ Campus Clubs</h3>
        </div>
        <div className="card-back">
          <h4>Campus Ambassadors</h4>
          <p>
            Lead the movement on your campus. Start a 2Connect club and inspire fellow students to take action.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </div>

    {/* Card 5 */}
    <div className="offer-card">
      <div className="card-inner">
        <div className="card-front">
          <FaGlobe className="card-icon" />
          <h3>Launching 2025</h3>
        </div>
        <div className="card-back">
          <h4>Global Volunteering</h4>
          <p>
            Coming soon: International volunteer experiences. Connect with causes around the world.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </div>

  </div>
</section>

<section className="our-impact">
  <h2 className="section-title">Our Impact</h2>

  <div className="impact-cards">
    <div className="impact-card">
      <div className="impact-icon">⭐</div>
      <h3 className="impact-number">500+</h3>
      <p>Active Volunteer Opportunities</p>
    </div>

    <div className="impact-card">
      <div className="impact-icon">🌍</div>
      <h3 className="impact-number">100+</h3>
      <p>Campus Clubs</p>
    </div>

    <div className="impact-card">
      <div className="impact-icon">🎓</div>
      <h3 className="impact-number">20+</h3>
      <p>Certifications Earned</p>
    </div>
  </div>
</section>



    </div>


   


    
  );
}
