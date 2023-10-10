import React, { useState } from "react";
import styled, {css} from "styled-components";
import { BiSearch, BiEdit } from "react-icons/bi";
import {AiFillHeart} from "react-icons/ai";
import Logo from "./Logo";

const Nav_div = styled.div`
 width: max-width;
  height: 70px;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  margin-left: 80px;
  margin-right: 80px;
  padding: 0 25px 0 50px;
  align-items: center;
  background: linear-gradient(
    93deg,
    rgba(243, 243, 243, 0.56) 0%,
    rgba(244, 244, 244, 0.45) 100%
  );
  border-radius: 10px;
`;
const Nav_ul = styled.ul`
  width: auto;
  height: 44px;
  background-color: black;
  display: flex;
  justify-content: space-around;
  border-radius: 100px;
  padding: 0px 25px;
  margin-right: 59px;
  `;
const Nav_li = styled.li`
  height: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin-right: 25px;
  &:hover {
    color: red;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  }`;
const Search_div = styled.div`
   width: 31px;
  height: 31px;
  background-color: #333;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: -44px;
  cursor: pointer;
  `;
const Search_icon = styled(BiSearch)`
width: 18px;
height: 18px;`;
const DropdownDiv = styled.div`
position: relative;
width: auto;
height: 24px;
align-items:center;
justify-content:center;
display: flex;
margin-right: 90px;`;
const DropdownButton = styled.button`
color:black;
font-weight:600;
background-color: transparent;
border: none;
cursor: pointer;
display: flex;
align-items: center;
`;
const ArrowButton = styled.img`
width: 15px;
height: 15px;
margin-left:10px;
`;
const DropdownContent = styled.div`
position: absolute;
flex-direction:column;
display: flex;
background-color: #fff;
min-width: 160px;
box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
z-index: 1;
top: 90%;
border: white;
margin-left: 6px;
color: black;
left:0;
`;
const Button_div = styled.div`
display:flex;
padding: 0px 20px;
width:auto;`;
const buttonStyles = (props) => {
  if (props.bookmark) {
    return css `
    width:auto;
    height:auto;
    align-items: center;
    border: 1px solid;
    border-color: #806056;
    border-radius: 100px;
    display: inline-flex;
    padding: 10px 25px;
    margin-right:20px;`;
  }
  else if(props.post){
    return css`
    width:auto; 
    height: auto;
    align-items:center;
    border: 1px solid;
    border-color: #806056;
    background-color: #806056;
    border-radius: 100px;
    display: inline-flex;
    padding:10px 25px;
    `;
  }
}
const Nav_button = styled.a`
${buttonStyles};
&:hover{
  background-color: #0056b3;
}`;
const textStyles = (props) => {
  if (props.bookmark) {
    return css`
    color: #806056;
    font-family: "Inter-Medium",Helvetica;
    font-size: 14px;
    font-weight:500;
    line-height:21px;
    width:fit-content;
    margin-right:10px;`
  }
  else if (props.post) {
    return css`
    color: #ffff;
    font-family: "Inter-Medium",Helvetica;
    font-size: 14px;
    font-weight:500;
    line-height:21px;
    width:fit-content;
    margin-right:10px;`;
  }
}
const Text_wrapper = styled.label`
${textStyles};`;
const Bookmark_icon = styled(AiFillHeart)`
width:15px;
height:15px;
color: #806056;`;
const Post_icon = styled(BiEdit)`
width:15px;
height:15px;
color: white;`;
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
const toggleDropdown = () => {
    setIsOpen(!isOpen);
};
const handleMouseEnter = () => {
  setIsOpen(true);
};

const handleMouseLeave = () => {
  setIsOpen(false);
};
  return (
<Nav_div>
  <Logo/>
  <Nav_ul>
    <Nav_li>Bán</Nav_li>
    <Nav_li>Thuê</Nav_li>
    <Nav_li>Tin tức</Nav_li>
    <Nav_li>Dự án</Nav_li>
    <Nav_li>On Sale</Nav_li>
    <Nav_li> 
      <Search_div>
        <Search_icon/>
      </Search_div>
    </Nav_li>
  </Nav_ul>
  <DropdownDiv>
            <DropdownButton  onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}>Dịch vụ khác   {isOpen ? (
                <ArrowButton src="/assets/up-arrow.png" alt="Up Arrow" className="arrow-button" />
              ) : (
                <ArrowButton src="/assets/down-arrow.png" alt="Down Arrow" className="arrow-button" />
              )}</DropdownButton>
                {isOpen && (
            <DropdownContent
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="dropdown-content"
          >
            <a href="#">Service 1</a>
            <a href="#">Service 2</a>
            <a href="#">Service 3</a>
          </DropdownContent>
          )}
        </DropdownDiv>
        <Button_div>
        <Nav_button bookmark>
        <Text_wrapper bookmark>Yêu thích</Text_wrapper>
        <Bookmark_icon/>
        </Nav_button>
        <Nav_button post>
          <Text_wrapper post>Đăng tin</Text_wrapper>
          <Post_icon/>
          </Nav_button>
        </Button_div>
</Nav_div>
  );
}
export default NavBar;