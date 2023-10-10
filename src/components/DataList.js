import React, { useState } from "react";
import styled, { css } from "styled-components";
import contents from "../contents";
import { Product } from "./Product";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const ListDiv = styled.div`
  width: auto;
  padding: 0px 80px;
`;
const TitleDiv = styled.div`
  width: auto;
`;
const Title = styled.h3`
  color: black;
  font-weight: bold;
  font-size: 30px;
`;
const ProductsDiv = styled.div`
  width: max-width;
  display: grid;
  grid-template-columns: 350px 350px 350px 350px;
  justify-content: center;
`;

const PaginationDiv = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  padding: 10px 0px 0px 0px;
`;
const PAginationRectangle = styled.div`
height:41px;
width: 100%;
position:relative;
display: flex;
  align-items: center;
  justify-content: center;`;
const PaginationButton = styled.button`
  background-color: #f6f8fa;
  border: none;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
  margin:0px 11px 0px 0px;
  ${(props) =>
    props.active &&
    css`
      background-color: #ECE7E6;
      color: #806056;
    `}
  ${(props) =>
    props.fade &&
    css`
      opacity: 0.5;
    `}
`;
const PreviousIcon = styled(GrFormPrevious)`
  height: 20px;
  width: 20px;
`;
const NextIcon = styled(GrFormNext)`
  height: 20px;
  width: 20px;
`;

function DataList() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = contents.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalProducts = contents.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ListDiv>
      <TitleDiv>
        <Title>Bất động sản dành cho bạn</Title>
      </TitleDiv>
      <ProductsDiv>
        {currentProducts.map((product) => (
          <Product
            key={product.id}
            image={product.image}
            name={product.name}
            location={product.location}
            price={product.price}
            superficiality={product.superficiality}
            bedroom={product.bedroom}
            bathroom={product.bathroom}
          />
        ))}
      </ProductsDiv>
      <PaginationDiv>
        <PAginationRectangle>

        <PaginationButton
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          >
          <PreviousIcon alt="Previous Button" />
        </PaginationButton>
        {pageNumbers.map((number) => (
          <PaginationButton
            key={number}
            onClick={() => setCurrentPage(number)}
            active={currentPage === number}
            fade={totalPages === 1 && number !== 1}
          >
            {number}
          </PaginationButton>
        ))}
        <PaginationButton
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          >
          <NextIcon alt="Next Button" />
        </PaginationButton>
          </PAginationRectangle>
      </PaginationDiv>
    </ListDiv>
  );
}
export default DataList;
