import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";

const FooterDiv = styled.div`
  background-color: #1b1b1b;
  width: max-width;
  height: auto;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 40px;
`;

const TextWrapper1 = styled.p`
 color: #FFF;
text-align: center;
font-family: Inter;
font-size: 30px;
font-style: normal;
font-weight: 600;
line-height: 150%; /* 45px */
`;

const TextWrapper2 = styled.p`
 color: #FFF;
text-align: center;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 24px */
`;

const Line = styled.hr`
  border: 0;
  border-top: 1px solid white;
  width: 100%;
  margin: 40px 0px 0px 0px;
`;
const Frame2 = styled.div`
width:100%;
height:auto;
display:flex;
align-items: flex-start;`;
const Frame3 = styled.div`
display:flex;
flex-direction:column;
width:100%;
height:auto;
margin: 40px 0px 0px 0px`;

const Frame4 = styled.div`
width:auto;
height: auto;
margin: 40px 0px 0px 0px;
`;

const LogoDiv = styled(Logo)`
  color: white;
`;

const TextWrapper3 = styled.p`
 color: #FFF;
 width:299px;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 150%; /* 21px */
`;

const EmailInputWrapper = styled.div`
  background-color: #1b1b1b;
  width: 27.1%;
  border: 1px solid white;
  border-radius: 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  padding: 25px;
  
`;

const EmailInput = styled.input`
  background-color: #1b1b1b;
  color: #ffffff;
  border: none;
  width: 100%;
  outline: none;
`;

const SendButton = styled.button`
  background-color: #806056;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 10px 25px;
  margin-left: 10px;
  cursor: pointer;
`;

const CategoryDiv = styled.div`
  display: inline-flex;
  align-self: flex-end;
  align-items: flex-start;
  flex-direction: row;
  gap: 60px;
  width: auto;
  margin: 0px 58px 0px 0px;

`;

const Column = styled.div`
  flex: 1;
`;

const HeaderCategory = styled.p`
 color: #FFF;
font-family: Inter;
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: 150%; /* 22.5px */
`;

const ContentCategory = styled.p`
 color: #FFF;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 21px */
`;

function Footer() {
  return (
    <FooterDiv>
      <TextWrapper1>Ready To Work With Us?</TextWrapper1>
      <TextWrapper2>
        Lorem ipsum dolor sit amet consectetur. Sed rutrum amet lacinia convallis tempor ut purus id.
      </TextWrapper2>
      <Line />
      <Frame2>
      <Frame3>
      <LogoDiv />
      <TextWrapper3>Amet consectetur. Sed rutrum amet lacinia convallis tempor ut purus id.</TextWrapper3>
      <EmailInputWrapper>
      <EmailInput type="text" placeholder="Enter your email" />
      <SendButton>Gửi</SendButton>
      </EmailInputWrapper>
      </Frame3>
      <Frame4>
      <CategoryDiv>
      <Column>
      <HeaderCategory>Home</HeaderCategory>
      <ContentCategory>About Us</ContentCategory>
      <ContentCategory>Collection</ContentCategory>
      <ContentCategory>Blog & News</ContentCategory>
      </Column>
      <Column>
      <HeaderCategory>Security</HeaderCategory>
      <ContentCategory>Privacy Policy</ContentCategory>
          <ContentCategory>User Agreements</ContentCategory>
          <ContentCategory>Copyright</ContentCategory>
        </Column>
        <Column>
        <HeaderCategory>Social Media</HeaderCategory>
        <ContentCategory>Instagram</ContentCategory>
        <ContentCategory>Facebook</ContentCategory>
        <ContentCategory>Twitter</ContentCategory>
        </Column>
        </CategoryDiv>
        </Frame4>
        </Frame2>
        </FooterDiv>
        );
}

export default Footer;
