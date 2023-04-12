import React from 'react';
import styled from '@emotion/styled';

const Base = styled.div`
  display: flex;
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 3px;
`;

const Category = styled.div`
  position:  relative;
  /* width: 90px; */
  /* height: 40px; */
`;


const Balloon = styled.img<{ textWidth: number }>`
  /* position: absolute; */
  /* top: 5px;
  left: 5px; */
  /* width: 80%; */
  /* height: 80%; */
  width: ${({ textWidth }) => `${textWidth*16}px`};
  height: 32px;
`;

const CategoryText = styled.div`
  font-size: 11px;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-45%,-55%);
  text-align: center;
`;

type Category = "article" | "stock" | "esg" | "cs" | "story" | "privacy" ;

interface Props {
  category: Category
}

const getCategoryText = (category: Category) => {
  if (category === "article") return "보도자료";
  if (category === "stock") return "주가정보";
  if (category === "esg") return "약속과 책임";
  if (category === "cs") return "고객센터";
  if (category === "story") return "스토리";
  if (category === "privacy") return "카카오 프라이버시";
  else return "";
}

const BalloonWithIcon: React.FC<Props> = ({ category }) => {
  return (
    <Base>
        <Icon src={`assets/category/${category}.png`} />
      <Category>
        <Balloon textWidth={getCategoryText(category)?.length} src="assets/balloon.png" alt="말풍선" />
        <CategoryText>{getCategoryText(category)}</CategoryText>
      </Category>
    </Base>
  )
}

export default BalloonWithIcon;