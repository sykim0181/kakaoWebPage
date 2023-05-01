import React from 'react';
import styled from "@emotion/styled";
import { IconType } from 'react-icons/lib';

const Base = styled.div`
  cursor: pointer;
`;

const Button = styled.div<{ size: number }>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background-color: black;
  border-radius: 50%;
  color: white;
  font-size: ${({ size }) => `${size*0.6}px`};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #454545;
  }
`;

interface Props {
  size: number,
  icon: IconType
}

const RoundButton: React.FC<Props> = (props) => {
  const Icon = props.icon

  return (
    <Base>
      <Button size={props.size}>
        <Icon />
      </Button>
    </Base>
  )
}

export default RoundButton;