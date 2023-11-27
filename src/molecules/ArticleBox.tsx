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

const Title = styled.div<{isBig: boolean}>`
  margin: ${({isBig}) => isBig ? "15px 0" : "10px 0"};
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
  date: string;
  title: string;
  hashtag: string[];
  imgUrl: string;
}

const ArticleBox: React.FC<Props> = (props) => {

  const getSize = (size: Size) => {
    if (size === "S") return { width: 280, height: 350 };
    else if (size === "M") return { width: 400, height:500 };
    else return { width: 600, height: 600 };
  }


  return (
    <Box size={getSize(props.size)}>
      <Base>
        <Header>
          <HeaderInfo>
            <BalloonWithIcon category='article' />
            <Date>{props.date}</Date>
          </HeaderInfo>
          <OptionButton>
            <BsThreeDotsVertical />
          </OptionButton>
        </Header>
          <Content>
            <Title isBig={props.size==="L" ? true : false}>
              <TitleText isBig={props.size==="L" ? true : false}>{props.title}</TitleText>
            </Title>
            <Hashtags contents={props.hashtag} />
          </Content>
          <Image src={props.imgUrl} />
      </Base>
    </Box>
  )
}

export default ArticleBox;