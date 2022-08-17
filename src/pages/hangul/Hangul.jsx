import React, { useState } from "react";
import * as dataHangul from "../../assets/data/hangul.json";
import Cards from "../../components/Cards";

const Hangul = () => {
  const [data] = useState(dataHangul);
  console.log(data);
  return (
    <div className="container mt-4">
      <h2 className="text-center">Hangul</h2>
      <div className="cardRow">
        {Object.entries(data.list).map((item, key) => (
          <Cards key={key} data={item[1]} />
        ))}
      </div>
    </div>
  );
};

export default Hangul;
