import React from 'react';
import styled from '@emotion/styled';

const Base = styled.div``;

interface Props {
  orientation: "horizontal" | "vertical",
  size: number
}

const Spacer: React.FC<Props> = (props) => {
  return (
    <Base>
      {props.orientation === "horizontal" ? (
        <div style={{ height: props.size, backgroundColor: "gray" }}></div>
      ) : (
        <div style={{ width: props.size, backgroundColor: "gray" }}></div>
      )}
    </Base>
  )
}

export default Spacer;