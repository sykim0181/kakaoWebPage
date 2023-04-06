import React, { useState, useEffect } from 'react';
import styled from "@emotion/styled";
import { BiSearch, BiGlobe, BiMoon } from 'react-icons/bi';

const Base = styled.header`
  width: 100%;
  margin: 0 auto;
  /* background-color: beige; */
  /* position: fixed;
  top: 0;
  left: 0; */
`;

const TextLogo = styled.h1`
  
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
`;



const Header: React.FC = () => {
  const [textBtnHover, setTextBtnHover] = useState(0);
  const [iconBtnHover, setIconBtnHover] = useState(0);

  return (
    <Base>
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
                  onMouseEnter={() => setTextBtnHover(1)} 
                  onMouseLeave={() => setTextBtnHover(0)}
                  isBlackFont={textBtnHover === 0 || textBtnHover === 1 ? true : false}
                  >
                    카카오
                </TextButton>
              </Link>
            </Menu>
            <Menu>
              <Link>
                <TextButton
                  onMouseEnter={() => setTextBtnHover(2)} 
                  onMouseLeave={() => setTextBtnHover(0)}
                  isBlackFont={textBtnHover === 0 || textBtnHover === 2 ? true : false}
                >
                  뉴스
                </TextButton>
              </Link>
            </Menu>
            <Menu>
              <Link>
                <TextButton
                  onMouseEnter={() => setTextBtnHover(3)} 
                  onMouseLeave={() => setTextBtnHover(0)}
                  isBlackFont={textBtnHover === 0 || textBtnHover === 3 ? true : false}
                >
                  기술과 서비스
                </TextButton>
              </Link>
            </Menu>
            <Menu>
              <Link>
                <TextButton
                  onMouseEnter={() => setTextBtnHover(4)} 
                  onMouseLeave={() => setTextBtnHover(0)}
                  isBlackFont={textBtnHover === 0 || textBtnHover === 4 ? true : false}
                >
                  약속과 책임
                </TextButton>
              </Link>
            </Menu>
          </MenuList>
          <MenuList>
            <Menu>
              <IconButton
                onMouseEnter={() => setIconBtnHover(1)} 
                onMouseLeave={() => setIconBtnHover(0)}
                isGrayBg={iconBtnHover === 1 ? true : false} 
              >
                <BiSearch />
              </IconButton>
            </Menu>
            <Menu>
              <IconButton
                onMouseEnter={() => setIconBtnHover(2)} 
                onMouseLeave={() => setIconBtnHover(0)}
                isGrayBg={iconBtnHover === 2 ? true : false} 
              >
                <BiGlobe />
              </IconButton>
            </Menu>
            <Menu>
              <IconButton
                onMouseEnter={() => setIconBtnHover(3)} 
                onMouseLeave={() => setIconBtnHover(0)}
                isGrayBg={iconBtnHover === 3 ? true : false} 
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