import React from 'react';
import styled from '@emotion/styled';
import { BsFillMegaphoneFill, BsThreeDotsVertical } from 'react-icons/bs';

const Base = styled.div``;

const Wrapper = styled.div`
  border: solid;
  border-radius: 15px;
  width: 500px;
  height: 500px;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  /* background-color: blue; */
  position: relative;
  padding: 10px 0;
  align-items: center;
`;

const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
`;

const Icon = styled.div`
  font-size: 30px;  
`;

const Category = styled.div`
  position: relative;
  width: 90px;
  height: 40px;
`;


const Balloon = styled.img`
  position: absolute;
  top: 5px;
  left: 5px;
  width: 80%;
  height: 80%;
`;

const CategoryText = styled.div`
  font-size: 11px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
`;

const Date = styled.div`
  font-size: 9px;
  color: gray;
  
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
  padding: 15px;
  font-size: 30px;
  font-weight: bold;
`;

const HashTags = styled.div`
  background-color: skyblue;
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


const Box: React.FC = () => {

  return (
    <Base>
      <Wrapper>
        <Header>
          <HeaderInfo>
            <Icon style={{ color: "yellow" }}>
              <BsFillMegaphoneFill />
            </Icon>
            <Category>
              <Balloon src="assets/balloon.png" alt="말풍선" />
              <CategoryText>보도자료</CategoryText>
            </Category>
            <Date>2023.04.06</Date>
          </HeaderInfo>
          <OptionButton>
            <BsThreeDotsVertical />
          </OptionButton>
        </Header>
        <Title>카카오메이커스, 지역 양조장 발굴 위한 전통주 기획전 진행</Title>
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

export default Box;