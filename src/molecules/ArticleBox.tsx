import React from 'react';
import styled from '@emotion/styled';
import { BsThreeDotsVertical } from 'react-icons/bs';
import BalloonWithIcon from '../atoms/BalloonWithIcon';
import Hashtags from '../atoms/Hashtags';
import Box from '../atoms/Box';


const Base = styled.div``;

const Header = styled.div`
  display: flex;
  /* background-color: blue; */
  position: relative;
  padding: 20px 0 0 0;
  align-items: center;
`;

const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
`;

const Content = styled.div`
  padding-left: 18px;
`;

const Date = styled.div`
  font-size: 9px;
  color: gray;
  margin-left: 10px;
`;

const OptionButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 23px;
  color: gray;
  position: absolute;
  right: 10px;
`;

const Title = styled.div`
  /* background-color: lightblue; */
`;

const TitleText = styled.h1<{isBig: boolean}>`
  margin: 0;
  width: 80%;
  font-size: ${({isBig}) => isBig ? "30px" : "20px"};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  /* background-color: blueviolet; */
`;

const Image = styled.img`
  width: 100%;
`;

type Size = "S" | "M" | "L";

interface Props {
  size: Size;
}

const ArticleBox: React.FC<Props> = (props) => {

  const getSize = (size: Size) => {
    if (size === "S") return { width: 280, height: 400 };
    else if (size === "M") return { width: 400, height:500 };
    else return { width: 600, height: 600 };
  }

  const hashtagContents = ["카카오커머스","커머스CIC","쇼핑탭","프로모션"];

  return (
    <Box size={getSize(props.size)}>
      <Base>
        <Header>
          <HeaderInfo>
            <BalloonWithIcon category='article' />
            <Date>2023.04.06</Date>
          </HeaderInfo>
          <OptionButton>
            <BsThreeDotsVertical />
          </OptionButton>
        </Header>
          <Content>
            <Title>
              <TitleText isBig={props.size==="L" ? true : false}>카카오메이커스, 지역 양조장 발굴 위한 전통주 기획전 진행. 카카오메이커스, 지역 양조장 발굴 위한 전통주 기획전 진행</TitleText>
            </Title>
            <Hashtags contents={hashtagContents} />
          </Content>
          <Image src="assets/dj.jpg" />
      </Base>
    </Box>
  )
}

export default ArticleBox;