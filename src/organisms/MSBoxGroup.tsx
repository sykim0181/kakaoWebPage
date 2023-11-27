import React from 'react';
import styled from "@emotion/styled";
import ArticleBox from '../molecules/ArticleBox';
import EsgBox from '../molecules/EsgBox';
import StockBox from '../molecules/StockBox';
import PrivacyBox from '../molecules/PrivacyBox';
import CSBox from '../molecules/CSBox';

const Base = styled.div`
  display: flex;
  ul li:nth-of-type(even) {
    margin: 40px 0;
  }
  /* background-color: aliceblue; */
  & ul:first-child {
    margin-right: 40px;
  }
`;

const BoxList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

interface Props {
  type: "long" | "short";
}

const MSBoxGroup: React.FC<Props> = (props) => {
  if (props.type === "long") {
    return (
      <Base>
        <BoxList>
          <li>
            <ArticleBox 
              size={"S"} 
              date={'2023.11.23'}
              title={'카카오, 2023 디지털플랫폼 엑스포 참가…공동체 혁신 기술 총집합'}
              hashtag={['기술혁신','디지털플랫폼엑스포']}
              imgUrl='https://t1.kakaocdn.net/thumb/R1920x0.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fnews%2Ffa0bff85018b00001.jpg'
            />
          </li>
          <li>
            <ArticleBox 
              size={"S"} 
              date={'2023.11.14'}
              title={'카카오, 자취생 죠르디의 관찰 예능 숏폼 영상 ‘자취왕 죠르디’ 론칭'}
              hashtag={['카카오프렌즈','니니즈','죠르디']}
              imgUrl='https://t1.kakaocdn.net/thumb/R1920x0.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fnews%2Fcb1a5541018b00001.png'
            />
          </li>
          <li>
            <EsgBox />
          </li>
        </BoxList>

        <BoxList>
          <li>
            <StockBox />
          </li>
          <li>
            <ArticleBox 
              size={"S"} 
              date={'2023.11.22'}
              title={`카카오, 지역 개발자 양성 프로젝트 '카카오 테크 캠퍼스' 1기 수료식 진행`}
              hashtag={['카카오테크캠퍼스']}
              imgUrl='https://t1.kakaocdn.net/thumb/R1920x0.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fnews%2Ff452cfa1018b00001.jpg'
            />          
          </li>
          <li>
            <EsgBox />
          </li>
        </BoxList>      
      </Base>
    )
  } else {
    return (
      <Base>
        <BoxList>
          <CSBox />
        </BoxList>

        <BoxList>
          <PrivacyBox />
        </BoxList>    
      </Base>
    )
  }
}

export default MSBoxGroup;