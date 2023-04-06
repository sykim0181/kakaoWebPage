import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import Box from '../components/Box';

const Base = styled.div`
  height: 1000px;
`;

const Content = styled.div`
  padding: 0 90px;
`;

const Articles = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const ArticlesHeader = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
`;

const ArticlesHeaderDay = styled.h1`
  margin-right: 10px;
  font-size: 18px;
`;

const AritclesHeaderText = styled.h1`
  font-size: 18px;
`;

const ArticlesTodayDate = styled.h1`
`;

const ContentHome = styled.div``;

const dayToHan = (day: number) => {
  const list = ["월","화","수","목","금","토","일"]
  return list[day-1]
}

const HomePage: React.FC = () => {

  const today = new Date();

  return (
    <Base>
      <Header />
      <Content>
        <Articles>
          <ArticlesHeader>
            <ArticlesHeaderDay>{today.getDate()}</ArticlesHeaderDay>  
            <AritclesHeaderText>오늘의 카카오</AritclesHeaderText>
          </ArticlesHeader>  
          <ArticlesTodayDate>오늘의 카카오</ArticlesTodayDate>
          <ArticlesTodayDate>{`${today.getMonth()}월 ${today.getDate()}일 ${dayToHan(today.getDay())}요일 소식입니다`}</ArticlesTodayDate>
          <ContentHome>
            <Box />
          </ContentHome>
        </Articles>  
      </Content>
    </Base>
  )
}

export default HomePage;