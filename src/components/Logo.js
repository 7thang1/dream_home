import React from 'react';
import styled from 'styled-components';
import logo from '../logoroot.png';

const LogoWrapper = styled.div`
width: auto;
height: 44px;
flex-direction: column;
display: inline-flex;
align-items: flex-start;
margin-right: 183px ;
`;
const LogoImg = styled.img`
width: 43px;
height: 21px;`;
const LogoText = styled.p`
width: 101px;
  font-family: Inter;
  font-size: 16px;
  margin: 0;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
  text-transform: capitalize;
  background: linear-gradient(180deg, #7a5f61 0%, #c28653 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function Logo() {
    return (
        <LogoWrapper>
            <LogoImg src={logo} alt='logo'>
            </LogoImg>
            <LogoText>Dream Home</LogoText>
        </LogoWrapper>
    );
}
export default Logo;