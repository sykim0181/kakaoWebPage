import React from 'react';
import styled from '@emotion/styled';

const Base = styled.div`
  background-color: #f1f1f1;
  border-radius: 35px;
  padding: 20px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  :hover {
    background-color: #c6c6c6;
  }
`;

interface Props {
  text: string
}

const RoundTextButton: React.FC<Props> = (props) => {
  return (
    <Base>
      {props.text}
    </Base>
  )
}

export default RoundTextButton;