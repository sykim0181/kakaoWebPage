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
  text: string;
  size: number;
  src: string;
}

const TitleWithIcon: React.FC<Props> = ({text, size, src}) => {

  return (
    <Base>
      <Icon size={size} src={src} />
      <Title size={size}>{text}</Title>
    </Base>
  )
}

export default TitleWithIcon;