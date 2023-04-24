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
  width: 90%;
  font-size: 17px;
`;



const PrivacyBox: React.FC = () => {

  const hashTagContents = ["카카오프라이버시"];

  return (
    <Box size={{ width: 280,height: 180 }}>
      <Base>
        <Header>
          <BalloonWithIcon category='privacy' />
        </Header>
        <Content>
          <Title>
            <TitleText>데이터의 연결과 보호의 균형을 위한 카카오의 노력</TitleText>
          </Title>
          <Hashtags contents={hashTagContents} />
        </Content>
      </Base>
    </Box>
  )
}

export default PrivacyBox;