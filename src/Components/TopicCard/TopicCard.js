import React from "react";
import { Card, Row, Col, Badge, Container, ProgressBar } from "react-bootstrap";

import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

import "./topicCard.css";

export default function TopicCard({ questionData }) {
  const findPercentage = (doneQuestions, totalQuestions) => {
    return Math.round((doneQuestions / totalQuestions) * 100);
  };

  let totalSolved = 0;
  let totalQuestions = 0;
  // Mapping questionData to topicCard array
  let topicCard = questionData.map((topic, index) => {
    let { topicName, doneQuestions, questions, started } = topic;
    let percentDone = findPercentage(doneQuestions, questions.length);
    let questionsRemainig = questions.length - doneQuestions;
    //adding solved questions of every topic to totalSolved
    totalSolved += doneQuestions;
    totalQuestions += questions.length;
    if (started) {
      return (
        <Fade duration={500 + index * 0.4} key={index}>
          <div className="col mb-4">
            <Link
              to={`/${topic.topicName
                .replace(/[^A-Z0-9]+/gi, "_")
                .toLowerCase()}`}
              style={{ textDecoration: "none" }}
            >
              <Card className="mb-3 inprogress-card animate__slideInDown hvr-grow ">
                <Card.Body>
                  <Row>
                    <Col>
                      <Card.Title className="topicName">
                        {topic.topicName}
                      </Card.Title>
                    </Col>
                    <Col>
                      <h4>
                        <Badge
                          variant="success"
                          className="float-right"
                          style={{
                            fontWeight: "500",
                            cursor: "pointer",
                            padding: "0.5rem 2rem",
                            borderRadius: "0",
                          }}
                        >
                          {questionsRemainig === 0 ? "Done" : "Solve Now"}
                        </Badge>
                      </h4>
                    </Col>
                  </Row>
                  <Card.Text className="totalQuestion">
                    Total Questions {topic.questions.length} <br />
                    {`${questionsRemainig}`} More to go
                  </Card.Text>
                  <p className="percentDone mb-1">
                    <b>{percentDone}% Done</b>
                  </p>
                  <ProgressBar
                    animated={percentDone === 100 ? false : true}
                    variant="success"
                    now={percentDone}
                  />
                </Card.Body>
              </Card>
            </Link>
          </div>
        </Fade>
      );
    } else {
      return (
        <Fade duration={500 + index * 50} key={index}>
          <div className="col mb-4">
            <Link
              to={`/${topic.topicName
                .replace(/[^A-Z0-9]+/gi, "_")
                .toLowerCase()}`}
              style={{ textDecoration: "none" }}
            >
              <Card className="mb-3 notstarted-card hvr-grow ">
                <Card.Body>
                  <Row>
                    <Col>
                      <Card.Title className="text-dark font-weight-bolder">
                        {" "}
                        {topicName}{" "}
                      </Card.Title>
                    </Col>
                    <Col>
                      <h4>
                        <Badge
                          variant="primary"
                          className="float-right bdge"
                          style={{ fontWeight: "500", cursor: "pointer" }}
                        >
                          Start Now
                        </Badge>
                      </h4>
                    </Col>
                  </Row>
                  <Card.Text className="totalQuestion text-dark">
                    Total Questions {questions.length}
                  </Card.Text>
                  <p className="percentDone mb-1">
                    <b>
                      <i>Not yet started</i>
                    </b>
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </div>
        </Fade>
      );
    }
  });

  return (
    <>
      <Container className="pt-4 text-center">
        <h1 className="fw-bold display-1 ">Let's Get Started</h1>
        <h3 className="display-5">
          Your gateway to crack <strong>Data Structures and Algorithms</strong>
        </h3>
      </Container>

      <h4 className="text-center mb-4">
        {totalSolved
          ? `Total Questions Solved : ${totalSolved} (${(
              (totalSolved / totalQuestions) *
              100
            ).toFixed(2)}% Done)`
          : "start solving now..."}
        <p className="percentDone container mt-1">
          {totalSolved ? (
            <ProgressBar
              animated={
                ((totalSolved / totalQuestions) * 100).toFixed(2) === "100"
                  ? false
                  : true
              }
              variant="success"
              now={((totalSolved / totalQuestions) * 100).toFixed(2)}
              style={{
                margin: "0.2em 5em",
                borderRadius: "0",
                height: "1rem",
                border: "1px solid #333",
              }}
              className="mt-4"
            />
          ) : null}
        </p>
      </h4>
      <div className="container container-custom">
        <div className="row row-cols-1 row-cols-md-3 mt-3 grids">
          {topicCard}
        </div>
      </div>
    </>
  );
}
