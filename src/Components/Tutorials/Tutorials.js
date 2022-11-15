import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TutorialsCard from "../TutorialsCard/TutorialsCard";

import Babbar from "./Images/Babbar.jpeg";
import Lakshay from "./Images/Lakshay.jpeg";
import Striver from "./Images/Striver.jpeg";
import GateSmasher from "./Images/Varun.jpg";

const Tutorials = () => {
  return (
    <>
      <Container>
        <h1 className="display-4 pt-3">Tutorials</h1>

        <hr noshade className="bg-dark" />
        <Row>
          <Col>
            <TutorialsCard
              image={Striver}
              title="Complete C++ STL in 1 Video | Time Complexity and Notes"
              name="Striver"
              link="https://www.youtube.com/playlist?list=PLgUwDviBIf0p-INQC6rMuzsSmdZ77EcrH"
            />
          </Col>
          <Col>
            <TutorialsCard
              image={Babbar}
              title="Complete C++ Placement DSA Course"
              name="Love Babbar"
              link="https://www.youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA"
            />
          </Col>
          <Col>
            <TutorialsCard
              image={Lakshay}
              title="DBMS for Placements"
              name="Lakshay Kumar"
              link="https://www.youtube.com/playlist?list=PLCnDDvBEXbis9zu41GuW0E3cLi8QFyMcI"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <TutorialsCard
              image={GateSmasher}
              title="Operating System"
              name="Gate Smasher"
              link="https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Tutorials;
