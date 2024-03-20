"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import { ProjectCards } from "./ProjectCards";
import { Particle } from "../Particle";

export const ProjectsContainer = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white", textAlign: "center" }}>
          Here are a few projects Ive worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={chatify}
              title="ResultPlan"
              description="ResultPlan is a results-driven diet food delivery project, dedicated to crafting healthy, weight-loss meals tailored 
              for optimal wellness. It offers effective customized and personalized plans with comprehensive nutritional guidance tailored to individual 
              profiles. I collaborated on this project as the Front lead and developed dynamic solution for varieties of diet-plans"
              demoLink="https://resultplan.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={editor}
              title="Kwavu"
              description="Kwavu is event management system where User can buy ticket from the Customer portal and
              system handle every activities of platform users like Ground Staff, Vendors, & Ticketing
              Resellers. I collaborated on this project as the Frontend developer and implemented work flow for platform manager and vendors."
              // demoLink="https://www.lordhair.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={bitsOfCode}
              title="Booking Africa"
              description="Bookings Africa is online marketplace that enables digital work; physically and virtually. Using Bookings Africa 
              Electronic Services(BAES) such as our in-app video call, secure file sharing, video uploads and much more you can monetize your skill,
              service, passion, content or product at the tap of a button. Contributed by devloping Admin pannel using React."
              // demoLink="https://www.bookingsafrica.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={leaf}
              title="Lordhair"
              description="Lordhair is a leading brand in the hair prosthesis industry, offering top-quality hairpieces and wigs for people suffering from 
              hair loss or seeking a new look. I collaborated on this project as the Frontend developer and implemented order flow, including checkout and
              placing orders."
              demoLink="https://www.lordhair.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
