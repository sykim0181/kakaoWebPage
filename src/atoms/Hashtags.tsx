import React from 'react';
import styled from '@emotion/styled';

const Base = styled.div`
  display: flex;
`;

const HashTag = styled.p`
  color: gray;
  font-size: 12px;
  margin-right: 2px;
`;

interface Prop {
  contents: string[]
}

const Hashtags: React.FC<Prop> = ({ contents }) => {
  return (
    <Base>
      {
        contents.map((content,i) => (
          <HashTag key={`ht-${i}`}>{`#${content}`}</HashTag>
        ))
      }
    </Base>
  )
}

export default Hashtags;