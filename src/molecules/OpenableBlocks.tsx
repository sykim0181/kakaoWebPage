import React, { useState } from 'react';
import styled from '@emotion/styled/macro';
import OpenableRoundTextButton from '../atoms/OpenableRoundTextButton';
import Block from '../atoms/Block';
import { Link } from '../atoms/Block';

const Base = styled.div`
  position: relative;
`;

const ContentBlock = styled.div<{ len: number, isVisible:boolean }>`
  position: absolute;
  top: ${({ len }) => `-${len*12+10*(len-1)+20*2 + 20}px`};
  display: ${({ isVisible }) => !isVisible ? "none" : ""};
`;

const TitleBlock = styled.div`

`;


interface Props {
  width: number,
  list: Link[],
  title: string,
}

const OpenableBlocks: React.FC<Props> = (props) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Base>
      <ContentBlock isVisible={isOpened} len={props.list.length}>
        <Block list={props.list} width={props.width}/>
      </ContentBlock>
      <TitleBlock onClick={() => setIsOpened(!isOpened)}>
        <OpenableRoundTextButton text={props.title} size={props.width} isOpened={isOpened}/>
      </TitleBlock>
    </Base>
  )
}

export default OpenableBlocks;