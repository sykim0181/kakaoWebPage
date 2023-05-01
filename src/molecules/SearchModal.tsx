import React from 'react';
import styled from '@emotion/styled/macro';
import { BiSearch } from 'react-icons/bi';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isSearchOpenAtom } from '../atoms';

const Base = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: green; */
  width: 1240px;
`;

const Header = styled.div`
  height: 70px;
  /* background-color: beige; */
  display: flex;
  align-items: center;
  position: relative;
  opacity: 0;

  &.visible {
    opacity: 1;
  }
  &.hidden {
    opacity: 0;
  }
`;

const PageTitle = styled.h1`
  font-size: 25px;
  margin: 0;
  padding: 0;
`;

const CloseButton = styled.div`
  position: absolute;
  right: 0;
  font-size: 30px;
  cursor: pointer;
`;

const SearchBlockGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 90px 0;
  opacity: 0;

  &.visible {
    opacity: 1;
    transition: all .5s .5s;
  }
  &.hidden {
    opacity: 0;
    height: 0;
  }
`;

const SearchBlock = styled.div`
  display: flex;
  background-color: #3e3e3e;
  width: 800px;
  /* height: 80px; */
  border-radius: 25px;
  align-items: center;
  padding: 22px;
`;

const SearchBlockIcon = styled.div`
  color: white;
  font-size: 32px;
  /* background-color: green; */
  display: flex;
  align-items: center;
`;

const SearchBlockInput = styled.input`
  font-size: 20px;
  border: none;
  margin-left: 15px;
  background-color: #3e3e3e;
  color: white;
  font-weight: bold;
  ::placeholder {
    color: white;
    font-weight: bold;
  }
  :focus {
    outline: none;
  }
`;

const CharImage = styled.img``;

const HashTagList = styled.ul`
  /* background-color: green; */
  margin: 0;
  margin-top: 30px;
  padding: 0;
  display: flex;
  justify-content: center;
  & li {
    list-style: none;
    :nth-of-type(even) {
      margin: 0 5px;
    }
  }
`;

const HashTag = styled.div`
  background-color: #eeeeee;
  border-radius: 15px;
  font-size: 13px;
  padding: 7px 10px;
`;

interface Props {

}

const SearchModal: React.FC<Props> = (props) => {
  const isSearchOpen = useRecoilValue(isSearchOpenAtom);
  const setIsSearchOpen = useSetRecoilState(isSearchOpenAtom);

  return (
    <Base>
      {/* <Header className={isSearchOpen ? 'visible' : 'hidden'}>
        <PageTitle>kakao</PageTitle>
        <CloseButton onClick={() => setIsSearchOpen(false)}>
          <AiOutlineClose />
        </CloseButton>
      </Header> */}
      <SearchBlockGroup className={isSearchOpen ? 'visible' : 'hidden'}>
        <div>
          <SearchBlock>
            <SearchBlockIcon>
              <BiSearch />
            </SearchBlockIcon>
            <SearchBlockInput placeholder="무엇이 궁금하신가요?" />
          </SearchBlock>
          <HashTagList>
            <li><HashTag>#카톡설명서</HashTag></li>
            <li><HashTag>#판로지원</HashTag></li>
            <li><HashTag>#거래액200억</HashTag></li>
            <li><HashTag>#상생협력</HashTag></li>
            <li><HashTag>#장애인의날</HashTag></li>
          </HashTagList>
        </div>
        <CharImage src='assets/searchIcon_char.png' width={'170px'} />
      </SearchBlockGroup>
    </Base>
  )
}

export default SearchModal;