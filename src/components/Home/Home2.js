import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
  I’m a Computer Science undergraduate focused on building real-world projects
  in <b className="purple">Cloud Computing</b> and <b className="purple">Software Development</b>.
  I enjoy learning by building, and I’m actively working on AWS-based projects and improving my
  problem-solving skills.
  <br />
  <br />
  I’m comfortable with
  <i>
    <b className="purple"> JavaScript, Python, C++, and AWS </b>
  </i>
  and I’m currently strengthening my skills in cloud architecture and backend development.
  <br />
  <br />
  My key interests include
  <i>
    <b className="purple"> AWS, Serverless Systems, and Full-Stack Development</b>
  </i>
  — especially building projects that are practical and production-like.
  <br />
  <br />
  Whenever possible, I like working with
  <b className="purple"> React.js </b> for the frontend and AWS services like{" "}
  <b className="purple">S3, Lambda, DynamoDB, and API Gateway</b> on the backend.
</p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
