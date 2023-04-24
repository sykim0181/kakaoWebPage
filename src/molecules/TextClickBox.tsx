import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from '@emotion/styled/macro';
import Block from '../atoms/Block';
import { ElType } from '../organisms/Footer';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { openedFooterPolicyNumAtom } from '../atoms';

const Base = styled.div`
  position: relative;
`;

const Title = styled.div`
  display: flex;
  cursor: pointer;
`;

const PolicyContentBlock = styled.div<{ len:number, isVisible: boolean }>`
  display: ${({ isVisible }) => !isVisible ? "none" : ""};
  position: absolute;
  top: ${({ len }) => `-${len*12+10*(len-1)+20*2 + 20}px`};
  left: 0;
`;

const Text = styled.div<{ isBold:boolean }>`
  font-size: 11px;
  color: ${({ isBold }) => isBold ? "black" : "#8c8c8c"};
  font-weight: bold;
`;

const OpenButton = styled.div`
  font-size: 11px;
  margin-left: 2px;
`;

interface Props {
  data: ElType,
  elIndex: number
}

const TextClickBox: React.FC<Props> = (props) => {
  const [isOpened,setIsOpened] = useState(false);
  const openedElNum = useRecoilValue(openedFooterPolicyNumAtom);
  const setOpenedElNum = useSetRecoilState(openedFooterPolicyNumAtom);
  
  const hasContent = props.data.el === undefined ? false : true;

  useEffect(() => {
    if (openedElNum !== props.elIndex) setIsOpened(false);
  }, [openedElNum]);

  return (
    <Base>
      {
        hasContent ? (
          <PolicyContentBlock 
            len={props.data.el!.length}
            isVisible={isOpened}  
          >
            <Block list={props.data.el!} />
          </PolicyContentBlock>
          
        ) : (null)
      }
      <Title onClick={() => {
        if (!isOpened) {//닫혀있던 경우
          setOpenedElNum(props.elIndex);
        } else {//열려있던 경우
          setOpenedElNum(-1);
        }
        setIsOpened(!isOpened);
      }}>
        <Text 
          isBold={props.data.title.isBold === undefined ? false : true}
        >{props.data.title.text}</Text>
        {
          hasContent ? (
            <OpenButton>{
              isOpened ? (<IoIosArrowUp />) : (<IoIosArrowDown />)
            }</OpenButton>
          ) : (<></>)
        }
      </Title>
    </Base>
  )
}

export default TextClickBox;