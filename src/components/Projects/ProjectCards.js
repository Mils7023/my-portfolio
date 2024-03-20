"use client";

import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import Image from "next/image";

export const ProjectCards = (props) => {
  return (
    <Card className="project-card-view">
      <Image
        src={props.imgPath}
        className="img-fluid logo"
        alt="card-img"
        height={177}
        width={288}
        style={{ textAlign: "justify", width: "100%", padding: "15px" }}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ textAlign: "center", width: "100%" }}
          >
            <CgWebsite /> &nbsp;
            {"View"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};
