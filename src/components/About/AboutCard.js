import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

export const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Milan Nariya </span>
            from <span className="purple"> Jamnagar, India.</span>
            <br />
            I am currently employed as a software developer at Wedowebapps.
            <br />
            I have completed BE at UCET Ahmedabad, India.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            &quot;Strive to build things that make a difference!&quot;
          </p>
          <footer className="blockquote-footer">Milan</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
};
