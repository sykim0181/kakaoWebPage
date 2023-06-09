import React from 'react';
import styled from '@emotion/styled';

const Base = styled.div`
  display: flex;
  align-items: center;
  /* background-color: skyblue; */
`;

const Icon = styled.img<{size: number}>`
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
  margin-right: ${({size}) => size/5}px;
`;

const Title = styled.div<{size:number}>`
  font-size: ${({size}) => size}px;
  font-weight: bold;
`;

interface Props {
  text: string,
  size: number,
  src: string
}

const TitleWithIcon: React.FC<Props> = (props) => {

  return (
    <Base>
      <Icon size={props.size} src={props.src} />
      <Title size={props.size}>{props.text}</Title>
    </Base>
  )
}

export default TitleWithIcon;