import React, { useState, useEffect } from 'react';
import styled from "@emotion/styled";
import { BiSearch, BiGlobe, BiMoon } from 'react-icons/bi';

const Base = styled.header<{ showBorder: boolean }>`
  width: 100%;
  height: 80px;
  margin: 0 auto;
  background-color: white;
  border-bottom: ${({ showBorder }) => showBorder ? "1px solid lightgrey" : "0px"};

  position: fixed;
  top: 0;
  z-index: 1;
`;

const TextLogo = styled.h1`
  font-size: 25px;
`;

const Navigation = styled.nav`
  /* background-color: aqua; */
`;

const MenuListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 90px;
`;

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  flex-shrink: 0;
  /* background-color: aliceblue; */
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
  margin-left: 10px;
`;



const Header: React.FC<{ isBorderVisible: boolean }> = ({ isBorderVisible }) => {
  const [hoverTextBtn, setHoverTextBtn] = useState(0);
  const [hoverIconBtn, setHoverIconBtn] = useState(0);

  return (
    <Base showBorder={isBorderVisible}>
      <Navigation>
        <MenuListWrapper>
          <MenuList>
            <Menu>
              <Link>
                <TextLogo>KAKAO</TextLogo>
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
        </MenuListWrapper>
      </Navigation>
    </Base>
  )
}

export default Header;