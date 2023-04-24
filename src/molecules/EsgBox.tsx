import React from 'react';
import styled from '@emotion/styled';
import Box from '../atoms/Box';
import BalloonWithIcon from '../atoms/BalloonWithIcon';
import Hashtags from '../atoms/Hashtags';


const Base = styled.div``;

const Header = styled.div`
  padding: 20px 20px 0 20px;
`;

const Content = styled.div`
  padding: 0 20px;
  padding-top: 15px;
`;

const Title = styled.div`
  margin-bottom: 20px;
`;

const TitleText = styled.h1`
  margin: 0;
  width: 80%;
  font-size: 17px;
`;



const EsgBox: React.FC = () => {

  const hashTagContents = ["약속과 책임","esg","소셜임팩트"];

  return (
    <Box size={{ width: 280,height: 180 }}>
      <Base>
        <Header>
          <BalloonWithIcon category='esg' />
        </Header>
        <Content>
          <Title>
            <TitleText>카카오는 당신과 함께 더 나은 세상을 만듭니다.</TitleText>
          </Title>
          <Hashtags contents={hashTagContents} />
        </Content>
      </Base>
    </Box>
  )
}

export default EsgBox;