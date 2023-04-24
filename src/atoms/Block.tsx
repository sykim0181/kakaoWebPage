import React from 'react';
import styled from '@emotion/styled/macro';

const Base = styled.div<{ width: string }>`
  width: ${({ width }) => width};
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #e2e2e2;
  
`;

const Element = styled.li`
  font-size: 11px;
  width: fit-content;
  & + & {
    margin-top: 10px;
  }
  /* background-color: pink; */
  white-space: nowrap;
  cursor: pointer;
  color: #656565;
  font-weight: 500;
  :hover {
    color: #1b1b1b;
  }
`;

export type Link = {
  text: string,
  link?: string
}

interface Props {
  list: Link[],
  width?: number,
}

const Block: React.FC<Props> = (props) => {
  return (
    <Base width={props.width!==undefined ? `${props.width}px` : "fit-content"}>
      <List>
        {
          props.list.map((data, i) => (
            <Element key={`el-${i}`}>{data.text}</Element>
          ))
        }
      </List>
    </Base>
  )
}

export default Block;