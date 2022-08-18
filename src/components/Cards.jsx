import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Cards = ({ data }) => {
  return (
    <Card className="card">
      <Card.Body>
        <Card.Title>{data.character}</Card.Title>
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item>{data.romanization}</ListGroup.Item>
        <ListGroup.Item className="sentence">
          <span
            dangerouslySetInnerHTML={{
              __html: data.sentence ? data.sentence : "-",
            }}
          ></span>
        </ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default Cards;
