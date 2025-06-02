import React from 'react';
import "./Header.css";
import HeroImage from "../assets/HeroImage.png";
import QuizVideo from "../videos/QuizVideo.mp4";

function Header() {
  return (
    <>
        <header className="head">
        <div className="logo">Quizify</div>

        <nav className="nav-links">
          <a href="#">Product</a>
          <a href="#">Solutions</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
          <a href="#">Enterprise</a>
        </nav>

        <div className="auth-buttons">
          <button className="login-btn">Log In</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </header>

      <div className="hero">
        <div className="quiz">
          <h1>Make an interactive quiz for your meeting</h1>
          <p>
            Run more engaging trainings and energize your participants with our live quiz maker.
          </p>
          <button className="quiz-btn">Create your quiz for free</button>
          <button className="join-btn">Join a live quiz</button>
        </div>


        <div className="play-button">
          <div className="triangle"></div>
        </div>

        <img src={HeroImage} alt="people collaborating" className="hero-image" />
      </div>

      <div className="test">
        <h2>Test people’s knowledge with an interactive online quiz</h2>
        <p>
          Want to spice up your presentation or check people’s learning in an engaging way? 
          Create a multiple choice quiz and bring out the competitive spirit at your meetings, 
          workshops, or informal gatherings.</p>
        <p>Run a live quiz as a separate activity or throughout your presentation and enjoy some funguessing time.</p>

        <video className="hero-video" autoPlay loop muted playsInline>
          <source src={QuizVideo} type="video/mp4" />
        </video>
      </div>
      <button className="quiz-btn2">Create your quiz for free</button>

      <div className="works">
        <h1>How it Works</h1>
      </div>
    </>
  );
}

export default Header;
