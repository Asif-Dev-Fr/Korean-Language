import React, { useEffect, useState } from "react";
import * as dataHangul from "../../assets/data/hangul.json";
import Cards from "../../components/Cards";
import Button from "react-bootstrap/esm/Button";

const HangulQuiz = () => {
  const [data] = useState(dataHangul);
  const [randomHangul, setRandomHangul] = useState([]);
  const [currentHangul, setCurrentHangul] = useState(0);
  const [loading, setLoading] = useState(false);
  console.log(data);

  // Methods :
  const findRandomHangul = () => {
    setLoading(true);
    console.log("findRandomHangul");
    let tmp = data.list.sort(() => 0.5 - Math.random());
    setRandomHangul(tmp);
    setLoading(false);
  };

  useEffect(() => {
    findRandomHangul();
  }, []);

  const showPrevious = () => {
    if (currentHangul !== 0)
      setCurrentHangul((prevTurn) => {
        return prevTurn - 1;
      });
  };

  const showNext = () => {
    if (currentHangul !== data.length)
      setCurrentHangul((prevTurn) => {
        return prevTurn + 1;
      });
  };

  return (
    !loading && (
      <div className="container mt-5">
        <div className="cardRow">
          {randomHangul
            .slice(currentHangul, currentHangul + 1)
            .map((item, key) => (
              <Cards key={key} data={item} />
            ))}
        </div>
        <div className="quizBouton text-center mt-3">
          <Button
            variant="warning"
            onClick={() => showPrevious()}
            style={{ marginRight: "15px" }}
          >
            Previous
          </Button>
          <Button variant="secondary" onClick={() => showNext()}>Next</Button>
        </div>
      </div>
    )
  );
};

export default HangulQuiz;
