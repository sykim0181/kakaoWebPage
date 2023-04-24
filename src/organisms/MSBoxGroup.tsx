import React from 'react';
import styled from "@emotion/styled";
import ArticleBox from '../molecules/ArticleBox';
import EsgBox from '../molecules/EsgBox';
import StockBox from '../molecules/StockBox';
import PrivacyBox from '../molecules/PrivacyBox';
import CSBox from '../molecules/CSBox';

const Base = styled.div`
  display: flex;
  ul li:nth-of-type(even) {
    margin: 40px 0;
  }
  /* background-color: aliceblue; */
  & ul:first-child {
    margin-right: 40px;
  }
`;

const BoxList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

interface Props {
  boxTypeList: string[][]
}

const MSBoxGroup: React.FC<Props> = (props) => {

  const changeToElement = (boxType: string) => {
    if (boxType === "article")
      return (
        <ArticleBox size={"S"} />
      )
    else if (boxType ==="esg")
      return (
        <EsgBox />
      )
    else if (boxType === "stock")
      return (
        <StockBox />
      )
    else if (boxType === "privacy")
      return (
        <PrivacyBox />
      ) 
    else if (boxType === "cs") 
      return (
        <CSBox />
      )
  }

  return (
    <Base>
      <BoxList>
        {
          props.boxTypeList[0].map((type,i) => (
            <li key={`box-${i}`}>
              {changeToElement(type)}
            </li>
          ))
        }
      </BoxList>
      <BoxList>
      {
          props.boxTypeList[1].map((type,i) => (
            <li key={`box-${i}`}>
              {changeToElement(type)}
            </li>
          ))
        }
      </BoxList>
    </Base>
  )
}

export default MSBoxGroup;