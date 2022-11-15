import React from "react";
import { Card } from "react-bootstrap";

const TutorialsCard = (props) => {
  return (
    <>
      <Card style={{ width: "18rem" }} className="m-4">
        <Card.Img varient="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            by: <strong>{props.name}</strong>
          </Card.Text>
          <a href={props.link} className="btn btn-md btn-dark">
            Go to Playlist
          </a>
        </Card.Body>
      </Card>
    </>
  );
};

export default TutorialsCard;
