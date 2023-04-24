import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { AiOutlineArrowUp } from 'react-icons/ai'
import Header from '../organisms/Header';
import TitleWithIcon from '../atoms/TitleWithIcon';
import ArticleBox from '../molecules/ArticleBox';
import MSBoxGroup from '../organisms/MSBoxGroup';
import ContentSmallHeader from '../organisms/ContentSmallHeader';
import Box from '../atoms/Box';
import Banner from '../organisms/Banner';
import BigColorBox from '../molecules/BigColorBox';
import RoundTextButton from '../atoms/RoundTextButton';
import Spacer from '../atoms/Spacer';
import RoundButton from '../atoms/RoundButton';
import Footer from '../organisms/Footer';

const Base = styled.div`
  height: 1000px;
`;

const Content = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: aliceblue;
`;


const ContentBigHeader = styled.div`
  padding: 60px 0;
  width: 1240px;
  margin: auto;
  background-color: green;
`;


const PostsTodayDate = styled.h1`
  font-size: 45px;
  margin: 0;
`;

const ContentHome = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: yellow; */
  width: 1240px;
`;

const Part1 = styled.div`
  display: flex;
  justify-content: center;
`;

const Part1Left = styled.div`
  width: 600px;
  height: 1060px;
`;

const Part1LeftBox = styled.div<{ scrollOnPart1:boolean }>`
  position: ${({ scrollOnPart1 }) => scrollOnPart1 ? "sticky" : "relative"};
  top: ${({ scrollOnPart1 }) => scrollOnPart1 ? "100px" : ""};
`;

const Part1Right = styled.div`
  margin-left:40px;
`;

const Part2 = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;

const Part3 = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;

const Part4 = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;

const Part4Left = styled.div`
  
`;

const Part4Right = styled.div`
  margin-left: 40px;
`;

const Part5 = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;

const Part5Button = styled.div`
  :first-of-type {
    margin-right: 40px;
  }
`;

const Part6 = styled.div`
  height: 300px;
  /* width: 1240px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-bottom: 30px; */
  /* background-color: orange; */
  position: relative;
`;


const dayToHan = (day: number) => {
  const list = ["일","월","화","수","목","금","토"]
  return list[day]
}

const HomePage: React.FC = () => {

  const today = new Date();

  const [showSH, setShowSH] = useState(false);//SmallHeader
  const [showHeaderBorder, setShowHeaderBorder] = useState(false);//Header Border
  const [scrollOnPart1, setScrollOnPart1] = useState(false);

  const part1RightBoxTypeList = [['article','article','esg'],['stock','article','esg']];
  const part4LeftBoxTypeList = [['cs'],['privacy']];

  const onScroll = () => {
    // console.log(window.scrollY);
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
    if (window.scrollY > 200 && window.scrollY < 1360) {
      setScrollOnPart1(true);
    } else {
      setScrollOnPart1(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
}, []);

  return (
    <Base>
      <Header isBorderVisible={showHeaderBorder} />
      <Content>
        <ContentBigHeader>
          <TitleWithIcon text={"오늘의 카카오"} size={45} src={`assets/calendarDate/${today.getDate()}.png`} />
          <PostsTodayDate>{`${today.getMonth()+1}월 ${today.getDate()}일 ${dayToHan(today.getDay())}요일 소식입니다`}</PostsTodayDate>
        </ContentBigHeader>
        <ContentSmallHeader 
          text={"오늘의 카카오"}
          size={20} 
          src={`assets/calendarDate/${today.getDate()}.png`} 
          isVisible={showSH}  
        />
        <ContentHome>
          <Part1>
            <Part1Left>
              <Part1LeftBox scrollOnPart1={scrollOnPart1}>
                <ArticleBox size={"L"} />
              </Part1LeftBox>
            </Part1Left>
            <Part1Right>
              <MSBoxGroup boxTypeList={part1RightBoxTypeList} />
            </Part1Right>
          </Part1>
          <Part2>
            <Box size={{ width: 1240, height: 500 }}>
              <Banner />
            </Box>
          </Part2>
          <Part3>
            <Box size={{ width: 1240, height: 150 }}>
              <div></div>
            </Box>
          </Part3>
          <Part4>
            <Part4Left>
              <MSBoxGroup boxTypeList={part4LeftBoxTypeList} />
            </Part4Left>
            <Part4Right>
              <ArticleBox size='L' />
            </Part4Right>
          </Part4>
          <Part5>
            <Part5Button>
              <BigColorBox />
            </Part5Button>
            <Part5Button>
              <BigColorBox />
            </Part5Button>
          </Part5>
          <Part6>
            <Spacer orientation='horizontal' size={90} />
            <RoundTextButton text="카카오 소식 모아보기" />
            <div style={{ position: "absolute", bottom: "20px", right: "0" }}>
              <RoundButton size={50} icon={AiOutlineArrowUp} />
            </div>
          </Part6>
        </ContentHome>
      </Content>
      <Footer />
    </Base>
  )
}

export default HomePage;