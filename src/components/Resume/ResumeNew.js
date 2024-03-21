"use client";

import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/Milan_React.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Particle } from "../Particle";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const ResumeContainer = () => {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    console.log("numPages", numPages);
    setNumPages(numPages);
    if (numPages > 1 && pageNumber > numPages) {
      setPageNumber(numPages);
    }
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const goToPreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const goToNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={pdf}
            className="d-flex justify-content-center"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page
              pageNumber={pageNumber}
              scale={width > 786 ? 1.7 : 0.6}
              height={500}
            />
          </Document>
        </Row>

        {numPages > 1 && (
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
              variant="primary"
              onClick={goToPreviousPage}
              disabled={pageNumber === 1}
              style={{ margin: "10px", width: "100px" }}
            >
              Previous
            </Button>
            <Button
              variant="primary"
              onClick={goToNextPage}
              disabled={pageNumber === numPages}
              style={{ margin: "10px", width: "100px" }}
            >
              Next
            </Button>
          </Row>
        )}

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
};
