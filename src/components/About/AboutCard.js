import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
  Hi everyone! I’m <span className="purple">Rohit Chandel</span> from{" "}
  <span className="purple">India</span>.
  <br />
  I’m currently a{" "}
  <span className="purple">Computer Science undergraduate</span> in my{" "}
  <span className="purple">final semester</span> and will be graduating in May 2026.
  <br />
  I’m actively seeking{" "}
  <span className="purple">entry-level Software Engineering / Cloud roles</span>.
  <br />
  <br />
  Outside of coding, I love engaging in activities that keep me motivated
  and disciplined:
</p>

<ul>
  <li className="about-activity">
    <span className="purple">🏋️‍♂️</span> Training and pushing my limits in the gym
  </li>
  <li className="about-activity">
    <span className="purple">📖</span> Reading self-development and mindset books
  </li>
  <li className="about-activity">
    <span className="purple">🎮</span> Playing Games 
  </li>
</ul>

<p style={{ color: "rgb(155 126 172)" }}>
    "Strive to build things that make a real difference."
  </p>
  <footer className="blockquote-footer">Rohit</footer>

        </blockquote>
      </Card.Body>
    </Card>
  );
}


export default AboutCard;
