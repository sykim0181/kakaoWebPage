import React, { useState } from 'react';
import styled from '@emotion/styled/macro';
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';

const Base = styled.div<{ width: number }>`
  display: flex;
  background-color: #e4e4e4;
  border-radius: 20px;
  width: ${({ width }) => `${width}px`};
  height: 40px;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

const Text = styled.div`
  font-size: 11px;
  position: absolute;
  left: 15px;
  color: #2d2d2d;
`;

const Icon = styled.div`
  position: absolute;
  right: 15px;
`;

interface Props {
  text: string,
  size: number,
  isOpened: boolean
}

const OpenableRoundTextButton: React.FC<Props> = (props) => {
  // const [isOpened, setIsOpened] = useState(false);

  return (
    <Base width={props.size} >
      <Text>{props.text}</Text>
      <Icon>
        {
          props.isOpened ? (
            <AiOutlineClose />
          ) : (
            <AiOutlinePlus />
          )
        }
      </Icon>
    </Base>
  )
}

export default OpenableRoundTextButton;