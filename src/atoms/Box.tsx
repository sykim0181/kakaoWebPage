import React, { ReactElement, useState } from 'react';
import styled from '@emotion/styled';

const Base = styled.div``;

const Wrapper = styled.div<{ hover: boolean, size: { width: number, height: number }}>`
  width: ${({ size }) => `${size.width}px`};
  height: ${({ size }) => `${size.height}px`};
  border-radius: 15px;
  background-color: white;
  box-shadow: ${({ hover }) => hover ? "5px 5px 10px 0 gray" : "5px 5px 10px 0 darkgray"};
  transform: ${({ hover }) => hover ? "translateY(-4px)" : ""};
  transition: transform .2s;
  overflow: hidden;
`;


interface Props {
  size: {
    width: number,
    height: number
  },
  children: ReactElement
}

const Box: React.FC<Props> = (props) => {

  const [hoverBox, setHoverBox] = useState(false);

  return (
    <Base>
      <Wrapper size={props.size}
        onMouseEnter={() => setHoverBox(true)}
        onMouseLeave={() => setHoverBox(false)}
        hover={hoverBox}
      >
        {props.children}
      </Wrapper>
    </Base>
  )
}

export default Box;