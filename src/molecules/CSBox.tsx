import React from 'react';
import styled from '@emotion/styled';
import Box from '../atoms/Box';
import BalloonWithIcon from '../atoms/BalloonWithIcon';


const Base = styled.div``;

const Header = styled.div`
  padding: 20px 20px 0 20px;
`;

const Content = styled.div`
  padding: 0 20px;
  padding-top: 15px;
`;


const CSBox: React.FC = () => {

  return (
    <Box size={{ width: 280,height: 180 }}>
      <Base>
        <Header>
          <BalloonWithIcon category='cs' />
        </Header>
        <Content>
          
        </Content>
      </Base>
    </Box>
  )
}

export default CSBox;