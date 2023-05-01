import React, {useState} from 'react';
import styled from '@emotion/styled/macro';
import { ElType } from '../organisms/Footer';
import TextClickBox from './TextClickBox';
import Spacer from '../atoms/Spacer';

const Base = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 5px 0;
`;

// const Policy = styled.div``;

const PolicyElement = styled.li`
  list-style: none;
`;


interface Props {
  list: ElType[]
}

const FooterPolicies: React.FC<Props> = (props) => {

  return (
    <Base>
      {
        props.list.map((data,i) => (
          <>
            <PolicyElement key={`policy-${i}`}>
              <TextClickBox 
                data={data} 
                elIndex={i}
              />
            </PolicyElement>
            <Spacer size={20} orientation='vertical' />
          </>
        ))
      }
    </Base>
  )
}

export default FooterPolicies;