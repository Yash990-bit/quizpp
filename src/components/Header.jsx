import React from 'react';
import "./Header.css";
import HeroImage from "../assets/HeroImage.png";
import QuizVideo from "../videos/QuizVideo.mp4";
import Slack from "../Images/Slack.png";
import MicrosoftTeam from "../Images/MicrosoftTeam.png";
import Zoom from "../Images/Zoom.png";
import GoogleMeet from "../Images/GoogleMeet.png";
import BusinessImg from "../assets/BusinessImg.png";
import TeamImg from "../assets/TeamImg.png";
import PopCulture from "../assets/PopCulture.png";
import Timer from "../assets/Timer.png";
import Star from "../assets/Star.png";
import Box from "../assets/Box.png";

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
      <div className="steps">
      <div className="step">
        <div className="step-image green-box">
          <p className="slido-title">slido</p>
          <p>Join at<br /><strong>slido.com</strong><br />#MyQuiz</p>
        </div>
        <h2>1. Create your quiz</h2>
        <p>
          Prepare your quiz in Slido and have your participants join with a link or QR code.
        </p>
      </div>

      <div className="step">
        <div className="step-image green-box">
          <p className="slido-title">slido</p>
          <img src="/path/to/voting-example.png" alt="Live voting" />
        </div>
        <h2>2. Host it live</h2>
        <p>
          Activate the questions one by one and let people answer from their phones or laptops.
        </p>
      </div>

      <div className="step">
        <div className="step-image green-box">
          <p className="slido-title">slido</p>
          <img src="/path/to/leaderboard-example.png" alt="Leaderboard" />
        </div>
        <h2>3. Display the leaderboard</h2>
        <p>
          Give your quiz a big finish by announcing top players, their scores and the hardest question.
        </p>
      </div>
    </div>

    <p className="guide-link"><a href="#">See detailed guide</a></p>
  </div>

  <div className="features">
    <h1>Create a quiz directly in your favorite tool</h1>
    <div className="tools">
      <div className="tool-card">
      <a href="https://slack.com/intl/en-in/" target="_blank" rel="noopener noreferrer">
        <img src={Slack} alt="Slack" />
      </a>
      </div>

      <div className="tool-card">
      <a href="https://www.microsoft.com/en-us/microsoft-teams/group-chat-software" target="_blank" rel="noopener noreferrer">
      <img src={MicrosoftTeam} alt="Microsoft Teams" />
      </a>
      </div>

      <div className="tool-card">
      <a href="https://www.zoom.com/" target="_blank" rel="noopener noreferrer">
      <img src={Zoom} alt="Zoom" />
      </a>
      </div>

      <div className="tool-card">
      <a href="https://meet.google.com/landing?pli=1" target="_blank" rel="noopener noreferrer">
      <img src={GoogleMeet} alt="Google Meet" />
      </a>
      </div>
    </div>
  </div>

  <div className="free">
  <h1>Get started with our free quiz templates</h1>
  <div className="quiz-templates">
    
    <div className="quiz-card">
      <img src={BusinessImg} alt="Business quiz"/>
      <h2>Business numbers quiz</h2>
      <p>Turn your business updates into an interactive quiz that will keep everyone engaged.</p>
      <a href="#">Use template</a>
    </div>

    <div className="quiz-card">
      <img src={TeamImg} alt="Team trivia quiz" />
      <h2>Team trivia quiz</h2>
      <p>Get to know your teammates better by guessing fun facts about each other.</p>
      <a href="#">Use template</a>
    </div>

    <div className="quiz-card">
      <img src={PopCulture} alt="Pop culture quiz" />
      <h2>Pop culture quiz</h2>
      <p>Test all the movie buffs and music lovers on their knowledge of popular culture.</p>
      <a href="#">Use template</a>
    </div>
  </div>
</div>

<div className="extra">
  <h1>Extra features</h1>
  <p>Make the most of our free quiz maker with these handy features</p>

  <div className="extra-features">
    <div className="feature-card">
      <img src={Timer} alt="Timer" />
      <h3>Timer</h3>
      <p>Add an element of pressure by setting a time limit to answer the questions.</p>
    </div>

    <div className="feature-card">
      <img src={Star} alt="Quiz Generator" />
      <h3>Quiz question generator</h3>
      <p>Short on time or ideas? Generate a random quiz question in one click.</p>
    </div>

    <div className="feature-card">
      <img src={Box} alt="Suggested Options" />
      <h3>Suggested options <span className="beta">BETA</span></h3>
      <p>Create quizzes faster by letting Slido suggest potential options for your quiz questions.</p>
    </div>
  </div>
</div>

    </>
  );
}

export default Header;
