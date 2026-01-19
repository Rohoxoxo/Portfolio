import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// ✅ Use your own thumbnails (recommended)
// Put your images in: src/Assets/Projects/
// Example names below — change these to your real filenames
import cs325Thumb from "../../Assets/Projects/cs325.png";
import cruftThumb from "../../Assets/Projects/cruft.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          A few projects I’ve built and contributed to.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* ===== Project 1: CS325 ===== */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cs325Thumb}
              isBlog={false}
              title="Python Web Scraping"
              description="Course project focused on running small-scale language models entirely locally. Implemented GPT-2 and DistilGPT-2 using Hugging Face Transformers and PyTorch to generate text responses from real-world prompts, compare model behavior, and store outputs for analysis without relying on external APIs."
              ghLink="https://github.com/Rohoxoxo/CS325_project1.git"
              demoLink="" // optional: put a demo link if you have one
            />
          </Col>

          {/* ===== Project 2: Cruft Crawler ===== */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cruftThumb}
              isBlog={false}
              title="Cruft Crawler (Offline AI Disk Cleanup)"
              description="Open-source systems project exploring an offline, LLM-first background agent for disk cleanup. Studied the Rust-based architecture, actor model design, and use of local quantized language models to analyze filesystem metadata and generate safe deletion recommendations without sending data off-device."
              ghLink="https://github.com/Rohoxoxo/Cruft-Crawler-Offline-AI-Driven-Background-Disk-Cleanup.git"
              demoLink="" // optional: demo video link (YouTube unlisted) if you make one
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
