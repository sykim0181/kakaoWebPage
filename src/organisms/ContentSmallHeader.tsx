import React from 'react';
import styled from '@emotion/styled';
import TitleWithIcon from '../atoms/TitleWithIcon';

const Base = styled.div<{ isVisible: boolean}>`
  display: ${({ isVisible }) => isVisible ? "flex" : "none"};
  border-bottom: ${({ isVisible }) => isVisible ? "1px solid lightgrey" : "0px"};
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  /* padding: 0 90px; */
  z-index: 2;
  background-color: white;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 1240px;
  align-items: center;
  display: flex;
`;



interface Props {
  text: string,
  size: number,
  src: string,
  isVisible: boolean
}

const ContentSmallHeader: React.FC<Props> = (props) => {
  return (
    <Base isVisible={props.isVisible}>
      <Wrapper>
        <TitleWithIcon text={props.text} size={props.size} src={props.src} />
      </Wrapper>
    </Base>
  )
}

export default ContentSmallHeader;