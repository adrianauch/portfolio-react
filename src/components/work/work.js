import imageDelish from "./images/Delishery.png";
import imageProf from "./images/teamprofilegen.png";
import imagePass from "./images/passwordgen.png";
import imageWeather from "./images/Weatherdash.png";
import imageNFT from "./images/NFTy.png";
import imageworkout from "./images/hoempage.png";

import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/Card";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import("react-dom");

export const Work = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <h1>Project Work:</h1>
      <Row>
        <Col xs={{ order: "last" }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imageDelish} />
            <Card.Body>
              <Card.Title>Delishery</Card.Title>

              <Button variant="primary" onClick={handleShow}>
                More information
              </Button>
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Project Description</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  This project was developed to aide anyone who loves to cook
                  and create their own cocktails but is burdened with
                  indecisiveness. Our Delishery website will walk through
                  through a few simple questions and will present you with a
                  randomized meal recipe and drink recipe. If you don't like the
                  meal, you can start again and get completely new results! Once
                  you find that perfect match, you can print the recipe off.
                </Offcanvas.Body>
              </Offcanvas>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://github.com/adrianauch/Delishery">
                Github Repository
              </Card.Link>
              <Card.Link href="https://adrianauch.github.io/Delishery/">
                Deployed Link
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs>
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={imageProf} />
            <Card.Body>
              <Card.Title>Team Profile Generator</Card.Title>
              <Button variant="primary" onClick={handleShow}>
                More Information
              </Button>
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Project Description</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  This command line application was generated to help a user
                  create a quick reference for their team. The application
                  generates an HTML file where the user would has access to see
                  their information. The cards include employeer information for
                  name, email and comapny ID. Then each role (Manager, Intern
                  and Engineer) has individualized information that pertains to
                  their job. Teh card is generated with this name and role at
                  the top of the card and their information below. The
                  application utilized the command line in the terminal to ask
                  the user prompts and the user simply has to answer the prompts
                  and an HTML will be gernerated. The user can determine how
                  many employees they want to include on eact team.
                </Offcanvas.Body>
              </Offcanvas>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://github.com/adrianauch/Team-Profile-Gen-hw">
                GitHub Repository
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={{ order: "first" }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imagePass} />
            <Card.Body>
              <Card.Title>Password Generator</Card.Title>
              <Button variant="primary" onClick={handleShow}>
                More Information
              </Button>

              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Project Description</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  The web application will generate a password based on user
                  criteria. The user is able to pick the length of password
                  between 8 and 128 characters. If the user selects an amount
                  outside of the specified range they will be alerted to
                  restart. The user will then have the ability to pick if they
                  would like their password to include upper-case letters,
                  lower-case letters, number or special characters. The
                  application will check to enusure that the user selected at
                  least one type of character. The application will then produce
                  an random password based on the users selections. The
                  application is a adptive to display on different screen sizes.
                </Offcanvas.Body>
              </Offcanvas>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://github.com/adrianauch/password-generator-hw">
                GitHub Repository
              </Card.Link>
              <Card.Link href="https://adrianauch.github.io/password-generator-hw/">
                Deployed Link
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <br></br>
      <Row>
        <Col xs={{ order: "last" }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imageNFT} />
            <Card.Body>
              <Card.Title>NFTy</Card.Title>
              <Button variant="primary" onClick={handleShow}>
                More Information
              </Button>

              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Project Descriptions</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  NFT stands for non-fungible tokens. NFTs exist on the
                  blockchain, which is a public ledger that records
                  transactions. An NFT is created from digital objects that
                  represent both tangible and intangible items, such as Art,
                  Gifs, Music etc. Essentially, NFT are digital collectors
                  items,. Think baseball cards but digital. They are popular
                  because they are on the blockchain so they can only have one
                  owner at a time and they are nearly impossible to copy. NFT's
                  are blowing up the digital art and collectable world. Digital
                  art and collectables market has started to explode thanks to
                  the blockchains. The recent boom in the NFT opened a space for
                  new online marketplaces for artists and collectors to buy and
                  sell NFTs. NFTy was created to give creators and investors the
                  ability to sell and buy exclusively digital objects that range
                  from funky 3D videos to images of famous tweets and everything
                  in between.
                </Offcanvas.Body>
              </Offcanvas>
            </Card.Body>

            <Card.Body>
              <Card.Link href="https://github.com/HavoxPrime/NFTy">
                Github Repository
              </Card.Link>
              <Card.Link href="https://project2-nfty.herokuapp.com/">
                Deployed Link
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imageWeather} />
            <Card.Body>
              <Card.Title>Weather Dashboard</Card.Title>
              <Button variant="primary" onClick={handleShow}>
                More Information
              </Button>

              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Project Description</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  The motivation behind creating this web application is to give
                  the user the ablility to view the weather in a certain
                  location. Additionally, the application has teh functionality
                  to look up weather data for the current date and a glimpse of
                  the next 5 day forcast. The application is able to pull in
                  weather data for Humity, Wind, Temp, and the current date. The
                  application saves search history to allow the see their recent
                  searches. The app gathers data from an API -
                  openweathermap.org.
                </Offcanvas.Body>
              </Offcanvas>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://github.com/adrianauch/WeatherDashBoard-hw">
                GitHub Repository
              </Card.Link>
              <Card.Link href="https://adrianauch.github.io/WeatherDashBoard-hw/">
                Deployed Link
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={{ order: "first" }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imageworkout} />
            <Card.Body>
              <Card.Title>Workout Tracker</Card.Title>
              <Button variant="primary" onClick={handleShow}>
                More Information
              </Button>

              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Project Description</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  The application was created for a user to be able to track
                  both cardio and weight-training exercises. The user is also
                  able to complete multiple cardio and weight-training exercises
                  in one session. The application will total the users total
                  workout duration, the amount excersises completed, pounds of
                  weights lifted, the total amount of sets and total reps.
                  Additionally, the application graph the users excersise data.
                </Offcanvas.Body>
              </Offcanvas>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://github.com/adrianauch/Workout-Tracker">
                Github Repository
              </Card.Link>
              <Card.Link href="https://polar-peak-65813.herokuapp.com/">
                Deployed Link
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Work;
