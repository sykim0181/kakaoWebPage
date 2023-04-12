import React, { useState } from 'react';
import styled from '@emotion/styled';
import { BsThreeDotsVertical } from 'react-icons/bs';
import BalloonWithIcon from './BalloonWithIcon';

const Base = styled.div``;

const Wrapper = styled.div<{ isBig: boolean, hover: boolean }>`
  /* border: solid 1px gray; */
  border-radius: 15px;
  width: ${({isBig}) => isBig ? "500px" : "300px"};
  height: ${({isBig}) => isBig ? "500px" : "400px"};
  overflow: hidden;
  background-color: white;
  box-shadow: ${({ hover }) => hover ? "5px 5px 10px 0 gray" : "5px 5px 10px 0 darkgray"};
  transform: ${({ hover }) => hover ? "translateY(-4px)" : ""};
  transition: transform .2s;
`;

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
  padding: 18px;
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

const HashTags = styled.div`
  /* background-color: skyblue; */
  display: flex;
  padding: 0 15px;
`;

const HashTag = styled.p`
  color: gray;
  font-size: 12px;
  margin-right: 2px;
`;

const Image = styled.img`
  width: 100%;
  /* height: 100%; */
  /* object-fit: cover; */
`;

const BoxWithPhoto: React.FC<{isBig: boolean}> = ({isBig}) => {
  const [hoverBox, setHoverBox] = useState(false);

  return (
    <Base>
      <Wrapper 
        isBig={isBig} 
        onMouseEnter={() => setHoverBox(true)}
        onMouseLeave={() => setHoverBox(false)}
        hover={hoverBox}
      >
        <Header>
          <HeaderInfo>
            <BalloonWithIcon category="esg" />
            <Date>2023.04.06</Date>
          </HeaderInfo>
          <OptionButton>
            <BsThreeDotsVertical />
          </OptionButton>
        </Header>
        <Title isBig={isBig}>
          <TitleText isBig={isBig}>카카오메이커스, 지역 양조장 발굴 위한 전통주 기획전 진행. 카카오메이커스, 지역 양조장 발굴 위한 전통주 기획전 진행</TitleText>
        </Title>
        <HashTags>
          <HashTag>#임팩트커머스</HashTag>
          <HashTag>#카카오메이커스</HashTag>
          <HashTag>#전통주기획전</HashTag>
        </HashTags>
        <Image src="assets/dj.jpg" />
      </Wrapper>
    </Base>
  )
}

export default BoxWithPhoto;