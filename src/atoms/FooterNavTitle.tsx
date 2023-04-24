import React from 'react';
import styled from '@emotion/styled/macro';

const Base = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;


const ListTitleCircle = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: "";
  position: absolute;
  left: -15px;
`;

const ListTitleText = styled.h1`
  font-weight: bold;
  font-size: 14px;
  margin: 0;
  cursor: pointer;
  :hover {
    &+${ListTitleCircle} {
      background-color: orange;
    }
  }
`;

interface Props {
  text: string
}

const FooterNavTitle: React.FC<Props> = (props) => {
  return (
    <Base>
      <ListTitleText>{props.text}</ListTitleText>
      <ListTitleCircle/>
    </Base>
  )
}

export default FooterNavTitle;