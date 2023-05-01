import React from 'react';
import styled from '@emotion/styled';
import TitleWithIcon from '../atoms/TitleWithIcon';

const Base = styled.div<{ isVisible: boolean}>`
  display: flex;
  border-bottom: 1px solid lightgrey;
  /* position: sticky; */
  top: 70px;
  width: 100%;
  height: 70px;
  /* padding: 0 90px; */
  z-index: 1;
  background-color: white;
  justify-content: center;
  opacity: 0;

  &.visible {
    position: sticky;
    top: -1px;
    opacity: 1;
    transition: position .7s;
    transition: top .7s;
  }
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
    <Base isVisible={props.isVisible} className={props.isVisible ? 'visible' : ''}>
      <Wrapper>
        <TitleWithIcon text={props.text} size={props.size} src={props.src} />
      </Wrapper>
    </Base>
  )
}

export default ContentSmallHeader;