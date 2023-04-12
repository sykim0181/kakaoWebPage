import React, { ReactElement, useState } from 'react';
import styled from '@emotion/styled';
import BalloonWithIcon from './BalloonWithIcon';

const Base = styled.div``;

const Wrapper = styled.div<{ hover: boolean }>`
  width: 300px;
  height: 200px;
  border-radius: 15px;
  background-color: white;
  box-shadow: ${({ hover }) => hover ? "5px 5px 10px 0 gray" : "5px 5px 10px 0 darkgray"};
  transform: ${({ hover }) => hover ? "translateY(-4px)" : ""};
  transition: transform .2s;
`;

const Header = styled.div`
  padding: 20px 0 0 0;
  padding-left: 15px;
  align-items: center;
`;

const Content = styled.div`
  padding: 0 18px;
`;


type Category = "stock" | "esg" | "privacy";

interface Props {
  category: Category,
  children: ReactElement
}

const Box: React.FC<Props> = (props) => {

  const [hoverBox, setHoverBox] = useState(false);

  return (
    <Base>
      <Wrapper
        onMouseEnter={() => setHoverBox(true)}
        onMouseLeave={() => setHoverBox(false)}
        hover={hoverBox}
      >
        <Header>
          <BalloonWithIcon category={props.category} />
        </Header>
        <Content>
          {props.children}
        </Content>
      </Wrapper>
    </Base>
  )
}

export default Box;