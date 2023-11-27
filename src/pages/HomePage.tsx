import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { AiOutlineArrowUp } from 'react-icons/ai'
import Header from '../organisms/Header';
import TitleWithIcon from '../atoms/TitleWithIcon';
import ArticleBox from '../molecules/ArticleBox';
import MSBoxGroup from '../organisms/MSBoxGroup';
import ContentSmallHeader from '../organisms/ContentSmallHeader';
import Box from '../atoms/Box';
import RoundTextButton from '../atoms/RoundTextButton';
import Spacer from '../atoms/Spacer';
import RoundButton from '../atoms/RoundButton';
import Footer from '../organisms/Footer';
import { isOnContentAtom, isSearchOpenAtom } from '../atoms';

const Base = styled.div`
  width: 100%;
  position: relative;

  &.fixed {
    position: fixed;
    overflow-y: scroll;
  }
`;

const Content = styled.div<{ isSearchOpen: boolean }>`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: aliceblue; */
  opacity: ${({ isSearchOpen }) => isSearchOpen ? ".3" : "1"};
`;


const ContentBigHeader = styled.div`
  padding: 60px 0;
  width: 1240px;
  margin: auto;
  /* background-color: green; */
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
  /* height: 1060px; */
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

const Img = styled.img`
  width: 100%;
`;


const dayToHan = (day: number) => {
  const list = ["일","월","화","수","목","금","토"]
  return list[day]
}

const HomePage: React.FC = () => {
  const today = new Date();

  const isOnContent = useRecoilValue(isOnContentAtom);
  const setIsOnContent = useSetRecoilState(isOnContentAtom);
  const [showHeaderBorder, setShowHeaderBorder] = useState(false);//Header Border
  const [scrollOnPart1, setScrollOnPart1] = useState(false);

  const isSearchOpen = useRecoilValue(isSearchOpenAtom);


  const onScroll = () => {
    // console.log(window.scrollY);
    if (window.scrollY > 80) {
      setShowHeaderBorder(true);
    } else {
      setShowHeaderBorder(false);
    }
    if (window.scrollY > 170){
      setIsOnContent(true);
    } else {
      setIsOnContent(false);
    }
    if (window.scrollY > 200 && window.scrollY < 1360) {
      setScrollOnPart1(true);
    } else {
      setScrollOnPart1(false);
    }

    if (isSearchOpen) {
      window.scrollTo(0,0);
    } 
  }

  const scrollToTop = () => {
    window.scroll(0,0);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
}, []);


  return (
    <Base className={isSearchOpen ? 'fixed' : ''}>
      <Header isBorderVisible={showHeaderBorder} />
      <ContentSmallHeader 
        text={"오늘의 카카오"}
        size={20} 
        src={`assets/calendarDate/${today.getDate()}.png`} 
        isVisible={isOnContent}  
      />
      <Content isSearchOpen={isSearchOpen}>
        <ContentBigHeader>
          <TitleWithIcon text={"오늘의 카카오"} size={45} src={`assets/calendarDate/${today.getDate()}.png`} />
          <PostsTodayDate>{`${today.getMonth()+1}월 ${today.getDate()}일 ${dayToHan(today.getDay())}요일 소식입니다`}</PostsTodayDate>
        </ContentBigHeader>
        <ContentHome>
          <Part1>
            <Part1Left>
              <Part1LeftBox scrollOnPart1={scrollOnPart1}>
                <ArticleBox 
                  size={"L"} 
                  date={'2023.04.06'}
                  title={'카카오메이커스, 지역 양조장 발굴 위한 전통주 기획전 진행. 카카오메이커스, 지역 양조장 발굴 위한 전통주 기획전 진행'}
                  hashtag={["카카오커머스","커머스CIC","쇼핑탭","프로모션"]}
                  imgUrl={'https://t1.kakaocdn.net/thumb/R1920x0.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fnews%2Ffb86cbbc018800001.png'}
                />
              </Part1LeftBox>
            </Part1Left>
            <Part1Right>
              <MSBoxGroup type='long' />
            </Part1Right>
          </Part1>
          <Part2>
            <Box size={{ width: 1240, height: 500 }}>
              <Img src='assets/banner.png' />
            </Box>
          </Part2>
          <Part3>
            <Box size={{ width: 1240, height: 120 }}>
            <Img src='assets/banner2.png' />
            </Box>
          </Part3>
          <Part4>
            <Part4Left>
              <MSBoxGroup type='short' />
            </Part4Left>
            <Part4Right>
              <ArticleBox 
                size='L'
                date={'2023.11.21'} 
                title={`'무인도의 디바', 글로벌 5위-40개국 TOP10 등극`}
                hashtag={['카카오엔터테인먼트', '무인도의디바', 'K콘텐츠흥행']}
                imgUrl='https://t1.kakaocdn.net/thumb/R1920x0.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fnews%2Fef990149018b00001.jpeg'
              
              />
            </Part4Right>
          </Part4>
          <Part5>
            <Part5Button>
              <Box size={{ width:600,height:320 }}>
                <Img src='assets/banner3.png' />
              </Box>
            </Part5Button>
            <Part5Button>
              <Box size={{ width:600,height:320 }}>
                <Img src='assets/banner4.png' />
              </Box>            
            </Part5Button>
          </Part5>
          <Part6>
            <Spacer orientation='horizontal' size={90} />
            <RoundTextButton text="카카오 소식 모아보기" />
            <div style={{ position: "absolute", bottom: "20px", right: "0" }} 
              onClick={() => {
                scrollToTop();
              }}
            >
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