import React, { useState } from 'react';
import styled from 'styled-components';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
const ProductDiv = styled.div`
width:auto;
display: block;
`;
const ProductCard = styled.div`
position: relative;
width: auto;
height: auto;
margin-left: 50px;
display: block;
justify-content: space-evenly;
margin-bottom: 50px;
box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.1);
padding: 0px 0px 22px 0px ;
`;
const ProductImage = styled.img`
width: 300px;
height: 200px;
border-radius: 10px;
`;
const NameDiv = styled.div`
display:flex;
font-size: 16px;
font-weight: 500;
margin-top: 1px;
padding: 10px;
`;

const DisplayStack = styled.div`
 color: black;
  font-size: 14px;
  margin-bottom:7px;`;
const Row = styled.div`
  display: flex;
  justify-content: space-evenly;`;
const ProductInfo = styled.div`
margin-bottom: 10px;
`;
const ProductIcon = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 2px;`;
const PriceSpan = styled.span`
  margin-right: 10px;
  font-size: 17px;
  color: #8c5a4b;`;
const ButtonDiv= styled.div`
width: max-width;
height: auto;
background-color: #806056;
border-radius: 6px;
display: flex;

justify-content: center;
align-items: center;
padding: 8px 15px;
margin: 0px 15px 0px 15px  ; `;
const DetailButton = styled.button`
 background-color: transparent;
  color: white;
  border: none;
  position: relative;
  z-index: 1;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    color: #0056b3;

  }`;
const BookmarkButton = styled.button`
width:30px;
height:30px;
position: absolute; 
top: 0;
right: 0;
background-color: rgba(140, 140, 140, 0.5);
border: none;
color: white;
border-radius: 6px;
cursor: pointer;
font-size: 20px;
align-items: center;
justify-content: center;
display:flex;
margin: 10px 10px 0px 0px;
`;



export function Product(props) {
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleBookmarkClick = () => {
      setIsBookmarked(!isBookmarked);
    };
    return( 
        <ProductDiv>
        <ProductCard key={props.id} >
        <ProductImage src={props.image} alt="product-image"/>
         <BookmarkButton onClick={handleBookmarkClick}>
          {isBookmarked ? <AiFillHeart size={20} /> : <AiOutlineHeart size={20} />}
        </BookmarkButton>
        <NameDiv>
            <span>{props.name}</span>
            </NameDiv>
            <DisplayStack>
                <Row>
                <ProductInfo><ProductIcon src="assets/location2.png" alt="location" />{props.location}</ProductInfo>
                <ProductInfo><PriceSpan>Mức giá:</PriceSpan>{props.price}</ProductInfo> </Row>
                <Row>
                <ProductInfo><ProductIcon src="assets/house-icon.png" alt="superficiality" />{props.superficiality}</ProductInfo>
                <ProductInfo><ProductIcon src="assets/bed-icon.png" alt="bedroom" />{props.bedroom}</ProductInfo>
                <ProductInfo><ProductIcon src="assets/bathtub-icon.png" alt="bathroom" />{props.bathroom}</ProductInfo>
                </Row>
                </DisplayStack>
            <ButtonDiv>
            <DetailButton>Xem chi tiết</DetailButton>
            </ButtonDiv>
            </ProductCard>
    </ProductDiv>);
}