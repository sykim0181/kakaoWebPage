import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import Box from '../components/Box';
import TitleWithIcon from '../components/TitleWithIcon';
import BoxWithPhoto from '../components/BoxWithPhoto';

const Base = styled.div`
  height: 1000px;
`;

const Content = styled.div`
  margin-top: 80px; 
  padding: 0 90px;
`;

const Posts = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const SmallHeader = styled.div<{ isVisible: boolean}>`
  display: ${({ isVisible }) => isVisible ? "flex" : "none"};
  border-bottom: ${({ isVisible }) => isVisible ? "1px solid lightgrey" : "0px"};
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  padding: 0 90px;
  background-color: white;
  z-index: 2;
`;

const PostsBigHeader = styled.div`
  padding: 60px 0;
`;


const PostsTodayDate = styled.h1`
  font-size: 45px;
  margin: 0;
`;

const ContentHome = styled.div``;


const PostBoxes = styled.div`
  display: flex;
`;

const BigBox = styled.div`
  margin-right: 35px;
`;


const ArticleScrollList = styled.div`
`;

const StockContent = styled.div``;

const Price = styled.div`
  display: flex;
  align-items: center;
`;

const PriceText = styled.h1`
  margin-right: 5px;
`;

const PriceDiff = styled.div``;

const DateDetail = styled.div`
  font-size: 12px;
  color: gray;
`;


const dayToHan = (day: number) => {
  const list = ["일","월","화","수","목","금","토"]
  return list[day]
}

const HomePage: React.FC = () => {

  const today = new Date();

  const [showSH, setShowSH] = useState(false);
  const [showHeaderBorder, setShowHeaderBorder] = useState(false);

  const onScroll = () => {
    if (window.scrollY > 80) {
      setShowHeaderBorder(true);
    } else {
      setShowHeaderBorder(false);
    }
    if (window.scrollY > 170){
      setShowSH(true);
    } else {
      setShowSH(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  });

  return (
    <Base>
      <Header isBorderVisible={showHeaderBorder} />
      <SmallHeader isVisible={showSH}>
        <TitleWithIcon text={"오늘의 카카오"} size={20} src={`assets/calendarDate/${today.getDate()}.png`} />
      </SmallHeader>
      <Content>
        <Posts>
          <PostsBigHeader>
            <TitleWithIcon text={"오늘의 카카오"} size={45} src={`assets/calendarDate/${today.getDate()}.png`} />
            <PostsTodayDate>{`${today.getMonth()+1}월 ${today.getDate()}일 ${dayToHan(today.getDay())}요일 소식입니다`}</PostsTodayDate>
          </PostsBigHeader>
          <ContentHome>
            <PostBoxes>
              <BigBox>
                <BoxWithPhoto isBig={true} />
              </BigBox>
              <ArticleScrollList>
                <BoxWithPhoto isBig={false} />
                <Box category='stock'>
                  <StockContent>
                    <Price>
                      <PriceText>58,700</PriceText>
                      <PriceDiff>▼ 600</PriceDiff>
                    </Price>
                    <DateDetail>2023.04.12 20:20:PM</DateDetail>
                  </StockContent>
                </Box>
              </ArticleScrollList>
            </PostBoxes>
          </ContentHome>
        </Posts>  
      </Content>
    </Base>
  )
}

export default HomePage;