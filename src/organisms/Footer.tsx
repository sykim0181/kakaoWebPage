// /** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled/macro';
import FooterNavTitle from '../atoms/FooterNavTitle';
import FooterPolicies from '../molecules/FooterPolicies';
import OpenableBlocks from '../molecules/OpenableBlocks';

const Base = styled.div`
  /* background-color: beige; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0 40px 0;
  border-top: solid 1px lightgray;
`;

const Part1 = styled.div`
  width: 1240px;
  display: flex;
  /* background-color: aquamarine; */
  justify-content: space-between;
  margin-bottom: 80px;
`;

const ListGroup = styled.div`
  :nth-of-type(even) {
    margin: 0 50px;
  }
  width: 150px;
  /* background-color: violet; */
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  li {
    list-style: none;
    color: gray;
    font-size: 14px;
    cursor: pointer;
    :nth-of-type(odd) {
      padding: 10px 0;
    }
    /* background-color: violet; */
    :hover {
      color: black
    }
  }
`;

const ExtraNav = styled.div`
  margin-left: 30px;
  ${List}:nth-of-type(even) {
    margin: 30px 0;
  }
`;

const Part2 = styled.div`
  display: flex;
  width: 1240px;
  height: 50px;
  position: relative;
  /* background-color: green; */
`;


const RelativeSite = styled.div`
  position: absolute;
  right:0;
`;


const Copyright = styled.div`
  /* background-color: pink; */
  width: 1240px;
  font-size: 12px;
  font-weight: 400;
  color: #8c8c8c;
`;

export type ElType = {
  title: {
    text: string
    url?: string
    isBold?: boolean;
  },
  el?: {
    text: string,
    url?: string
  }[]
}

const Footer: React.FC = () => {

  

  const NavListData: ElType[] = [
    {
      title: {text: "카카오"},
      el: [
        {text: "카카오 문화"},
        {text: "공동체"},
        {text: "히스토리"}
      ]
    },
    {
      title: {text: "뉴스"},
    },
    {
      title: {text: "기술과 서비스"},
      el: [
        {text: "기술"},
        {text: "서비스"},
      ]
    },
    {
      title: {text: "약속과 책임"},
      el: [
        {text: "ESG"},
        {text: "카카오의 다짐"},
        {text: "소셜임팩트"},
        {text: "디지털 권리"},
        {text: "AI 윤리"}
      ]
    },
    {
      title: {text: "투자 정보"},
      el: [
        {text: "기업지배구조"},
        {text: "주가정보"},
        {text: "재무정보"},
        {text: "IR행사"},
        {text: "공시정보"},
        {text: "공고"}
      ]
    },
  ]

  const PolicyListData: ElType[] = [
    {
      title: {
        text: "이용약관" 
      },
      el: [
        {text: "카카오계정 서비스↗"},
        {text: "카카오 서비스↗"},
        {text: "Daum 서비스↗"}
      ]
    },
    {
      title: {
        text: "위치기반서비스이용약관",
        isBold: true
      },
      el: [
        {text: "카카오 서비스↗"},
        {text: "Daum 서비스↗"}
      ]
    },
    {
      title: {
        text: "개인정보처리방침",
        isBold: true
      },
      el: [
        {text: "기업사이트"},
        {text: "카카오 서비스↗"}
      ]
    }, 
    {
      title: {
        text: "운영정책"
      }
    },
    {
      title: {
        text: "청소년보호정책" 
      },
      el: [
        {text: "카카오 서비스↗"},
        {text: "Daum 서비스↗"}
      ]
    }, 
    {
      title: {
        text: "브랜드보호정책"
      }
    },
    {
      title: {
        text: "권리침해신고안내"
      }
    },
    {
      title: {
        text: "공지사항" 
      },
      el: [
        {text: "투자정보 공지"},
        {text: "카카오 서비스↗"},
        {text: "Daum 서비스↗"}
      ]
    }, 
    {
      title: {
        text: "사이버윤리실"
      }
    },
    {
      title: {
        text: "Contact Us"
      }
    }
  ]

  const relSite: {text: string, url?: string}[] = [
    {
      text: "카카오 AI ↗",
    },
    {
      text: "카카오 프라이버시 ↗",
    }, 
    {
      text: "카카오 디벨로퍼스 ↗",
    },
    {
      text: "다음 포털 사이트 ↗",
    },
    {
      text: "동반 성장 사이트 ↗",
    },
    {
      text: "제주 with kakao ↗",
    },
  ]

  return (
    <Base>
      <Part1>
        {
          NavListData.map((data, i) => (
            <ListGroup key={`lg${i}`}>
              <FooterNavTitle text={data.title.text} />
              <List>
                {
                  data.el?.map((elDt,j) => (
                    <li key={`lg${i}-li${j}`}>{elDt.text}</li>
                  ))
                }
              </List>
            </ListGroup>
          ))
        }
        <ExtraNav>
          <ListGroup>
            <FooterNavTitle text="고객센터" />
            <List>
              <li>카카오 고객센터 ↗</li>
              <li>Daum 고객센터 ↗</li>
            </List>
            <List>
              <FooterNavTitle text="인재영입↗" />
            </List>
            <List>
              <FooterNavTitle text="카카오계정↗" />
            </List>
          </ListGroup>
        </ExtraNav>
        
      </Part1>
      <Part2>
        <FooterPolicies list={PolicyListData} />
        <RelativeSite>
          <OpenableBlocks width={210} list={relSite} title='관련 사이트' />
        </RelativeSite>
      </Part2>
      <Copyright>@ Kakao Corp. All rights reserved.</Copyright>
    </Base>
  )
}

export default Footer;