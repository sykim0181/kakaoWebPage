import React, { useState } from 'react';
import styled from "@emotion/styled";
import { BiSearch, BiGlobe, BiMoon } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import SearchModal from '../molecules/SearchModal';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isOnContentAtom, isSearchOpenAtom } from '../atoms';


const Base = styled.header`
  width: 100%;
  height: fit-content;
  position: sticky;
  top: 0;
  z-index: 1;

  &.hidden {
    top: -80px;
    transition: all .8s;
  }
`;

const TextLogo = styled.h1`
  font-size: 25px;
  margin: 0;
  padding: 0;
`;


const Navigation = styled.nav<{ showBorder: boolean}>`
  border-bottom: ${({ showBorder }) => showBorder ? "1px solid lightgrey" : "0px"};
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const MenuListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 0 90px; */
  /* background-color: beige; */
  width: 1240px;
  position: relative;

  &.hidden {
    & :nth-child(2) {
      opacity: 0;
    }
    & :nth-child(3) {
      opacity: 0;
    }
  }
`;

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  flex-shrink: 0;
  /* background-color: aliceblue; */
/*   
  &:nth-of-type(2) {
    opacity: 0;
  } */
`;

const Menu = styled.li`
  flex-shrink: 0;
  /* &:not(first-of-type){
    margin-left: 15px;
  } */
`;

const Link = styled.a`
  cursor: pointer;
`;

const TextButton = styled.button<{ isBlackFont: boolean }>`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: bolder;
  padding: 0 20px;
  color: ${({isBlackFont}) => isBlackFont ? 'black' : 'gray'};
`;

const IconButton = styled.button<{ isGrayBg: boolean }>`
  border: none;
  height: 35px;
  width: 35px;
  font-size: 40px;
  border-radius: 50%;
  background: ${({isGrayBg}) => isGrayBg ? 'lightgray' : 'none'};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  :nth-of-type(even) {
    margin: 10px;
  }
`;

const CloseButton = styled.div<{ isVisible: boolean }>`
  position: absolute;
  right: 0;
  font-size: 30px;
  cursor: pointer;
  visibility: ${({ isVisible }) => isVisible ? "visible" : "hidden"};
`;

const SearchModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: beige; */
  height: 0;
  
  &.visible {
    height: 430px;
    transition: all .5s;
  }
  &.hidden {
    height: 0;
    transition: all .5s;
  }
`;


interface Props {
  isBorderVisible: boolean;
}

const Header: React.FC<Props> = (props) => {
  const [hoverTextBtn, setHoverTextBtn] = useState(0);
  const [hoverIconBtn, setHoverIconBtn] = useState(0);

  const isSearchOpen = useRecoilValue(isSearchOpenAtom);
  const setIsSearchOpen = useSetRecoilState(isSearchOpenAtom);
  const isOnContent = useRecoilValue(isOnContentAtom);

  return (
    <Base className={isOnContent ? 'hidden' : ''}>
      <Navigation showBorder={props.isBorderVisible}>
        <MenuListWrapper className={!isSearchOpen ? 'visible' : 'hidden'}>
          <MenuList>
            <Menu>
              <Link>
                <TextLogo>kakao</TextLogo>
              </Link>
            </Menu>
          </MenuList>
          <MenuList>
            <Menu>
              <Link>
                <TextButton 
                  onMouseEnter={() => setHoverTextBtn(1)} 
                  onMouseLeave={() => setHoverTextBtn(0)}
                  isBlackFont={hoverTextBtn === 0 || hoverTextBtn === 1 ? true : false}
                  >
                    카카오
                </TextButton>
              </Link>
            </Menu>
            <Menu>
              <Link>
                <TextButton
                  onMouseEnter={() => setHoverTextBtn(2)} 
                  onMouseLeave={() => setHoverTextBtn(0)}
                  isBlackFont={hoverTextBtn === 0 || hoverTextBtn === 2 ? true : false}
                >
                  뉴스
                </TextButton>
              </Link>
            </Menu>
            <Menu>
              <Link>
                <TextButton
                  onMouseEnter={() => setHoverTextBtn(3)} 
                  onMouseLeave={() => setHoverTextBtn(0)}
                  isBlackFont={hoverTextBtn === 0 || hoverTextBtn === 3 ? true : false}
                >
                  기술과 서비스
                </TextButton>
              </Link>
            </Menu>
            <Menu>
              <Link>
                <TextButton
                  onMouseEnter={() => setHoverTextBtn(4)} 
                  onMouseLeave={() => setHoverTextBtn(0)}
                  isBlackFont={hoverTextBtn === 0 || hoverTextBtn === 4 ? true : false}
                >
                  약속과 책임
                </TextButton>
              </Link>
            </Menu>
          </MenuList>
          <MenuList>
            <Menu>
              <IconButton
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                onMouseEnter={() => setHoverIconBtn(1)} 
                onMouseLeave={() => setHoverIconBtn(0)}
                isGrayBg={hoverIconBtn === 1 ? true : false} 
              >
                <BiSearch />
              </IconButton>
            </Menu>
            <Menu>
              <IconButton
                onMouseEnter={() => setHoverIconBtn(2)} 
                onMouseLeave={() => setHoverIconBtn(0)}
                isGrayBg={hoverIconBtn === 2 ? true : false} 
              >
                <BiGlobe />
              </IconButton>
            </Menu>
            <Menu>
              <IconButton
                onMouseEnter={() => setHoverIconBtn(3)} 
                onMouseLeave={() => setHoverIconBtn(0)}
                isGrayBg={hoverIconBtn === 3 ? true : false} 
              >
                <BiMoon />
              </IconButton>
            </Menu>
          </MenuList>
          <CloseButton 
            onClick={() => setIsSearchOpen(false)} 
            isVisible={isSearchOpen}>
            <AiOutlineClose />
          </CloseButton>
        </MenuListWrapper>
      </Navigation>
      <SearchModalWrapper className={isSearchOpen ? 'visible' : 'hidden'}>
        <SearchModal />
      </SearchModalWrapper>
    </Base>
  )
}

export default Header;