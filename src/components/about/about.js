import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import myImage from "./Image/me1.jpg";

export const AboutMe = () => {
  return (
    <div>
      <h1>About Me!</h1>
      <Container>
        <Row>
          <Col>
            <Image src={myImage} fluid />
          </Col>
          <Col>
            <p>
              Welcome to my portfolio! I am currently working to become a full
              stack developer at University of Denver, and I have an expected
              graduation date of October 2021. Additonally, I have my bachelors
              degree in Political Science and a minor in English Litature from
              University of Colorado, Boulder. Sko Buffs!
            </p>
            <p>
              Previously, I worked at a tech start-up as a workforce management
              analyst. Where I forcasted staffing and made intraday changes to
              meet company service level goals. Additionally, I worked to create
              hiring plans to maintain staff to meet service level goals and
              call quality. I decided to make a career change to work in a field
              that allows for more creativity. While allowing me to continue to
              use my strategic thinking and problem solving skills. I look
              forward to being an ever evolving developer that can create web
              applications that preform effortlessly and efficiently.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default AboutMe;
