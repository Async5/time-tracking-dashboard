import React, { useState, useEffect } from "react";
import Card from "./card/Card";
import Profile from "../profile/Profile";
import { StyledCardContainer } from "./styles";
import getData from "../../api/data";

const CardContainer = () => {
  const [format, setFormat] = useState("weekly");
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(getData());
  }, []);

  return (
    <StyledCardContainer>
      <Profile format={format} setFormat={setFormat} />
      {data &&
        data.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            timeframes={item.timeframes}
            format={format}
            setFormat={setFormat}
          />
        ))}
    </StyledCardContainer>
  );
};

export default CardContainer;
