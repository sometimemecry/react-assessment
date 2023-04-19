import React from "react";
import Header from "./Header";
import './owner.css'

const Owner = () => {
  return (
    <>
      <Header />
      <div className="owner-container">
      <h1>Ball - Group I - 47</h1>
      <img src="https://dummyimage.com/250/ffffff/000000" />
      <h3>Short Biography:</h3>
      <p>
        I am a Junior Software Developer program graduate from Generation
        Thailand, equipped with strong technical skills in web development using
        React and Node.js. In addition, I have two years of experience as a food
        delivery rider, which has enhanced my communication skills and
        problem-solving abilities. I am currently seeking a Frontend Developer
        position where I can apply my technical expertise and prior experience
        to contribute to the success of the team.
      </p>
      </div>
    </>
  );
};

export default Owner;
