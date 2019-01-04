import React from "react";
import styled from "styled-components";

const HistoryBox = ({ history, img, reverse }) => {
  return (
    <History reverse={reverse}>
     <div><Img src={img}  reverse={reverse}/></div> 
      <div>
        <Name>{history.name}</Name>
        <div>
          <i>{history.date}</i>
        </div>
        <p>{history.description}</p>
      </div>
    </History>
  );
};

export default HistoryBox;

const Img = styled.img`
  max-width: 400px;
  margin-right: ${props => props.reverse ? 0  : "20px" };
  margin-left: ${props => props.reverse ? "20px"  : 0 };
`;

const History = styled.div`
  display: flex;
  margin-bottom: 30px;
  flex-direction: ${props => props.reverse ? "row-reverse"  : 'row' };
`;

const Name = styled.h2`
    color: ${props => props.theme.main};
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 20px;
    border-bottom: 0.08em solid rgb(229, 229, 229);
 `