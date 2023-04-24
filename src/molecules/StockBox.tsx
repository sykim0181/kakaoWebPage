import React from 'react';
import styled from '@emotion/styled';
import Box from '../atoms/Box';
import BalloonWithIcon from '../atoms/BalloonWithIcon';

const Base = styled.div``;

const Header = styled.div`
  padding: 20px 20px 0 20px;
`;

const Content = styled.div`
  padding: 0 20px;
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 25px;
  /* background-color: aliceblue; */
  `;

const PriceText = styled.h1`
  margin-right: 5px;
`;

const PriceDiff = styled.div``;


const DateDetail = styled.div`
  font-size: 12px;
  color: gray;
`;


const StockBox: React.FC = () => {

  return (
    <Box size={{ width: 280, height: 180 }}>
      <Base>
        <Header>
          <BalloonWithIcon category='stock' />
        </Header>
        <Content>
          <Price>
            <PriceText>58,700</PriceText>
            <PriceDiff>▼ 600</PriceDiff>
          </Price>
          <DateDetail>2023.04.12 20:20:PM</DateDetail>
        </Content>
      </Base>
    </Box>
  )
}

export default StockBox;