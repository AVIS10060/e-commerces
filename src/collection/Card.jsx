import styled from "styled-components";

const Content = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 350px;
  border: 1px solid #5c5353;
  border-radius: 4px;
  background-color: black;
  cursor: pointer;
  &:hover {
    border: 1px solid #0152a1;
  }
`;

const Image = styled.img`
  width: 99%;
  height: 70%;
  object-fit: cover;
  &:hover {
   
    transform :scale(1.01);
  }
`;
const Product = styled.h5`
  border: 1px solid grey;
  background-color: black;
  border-radius: 20px;
  width: auto;
  margin-left: -60px;
  margin-top: 15px;
  padding: 10px;
`;
const Price = styled.span`
  background-color: blue;
  font-size: 13px;
  padding: 5px;
  border-radius: 20px;
  margin-left: 38px;
`;

const Card = (props) => {
  return (
    <>
      <Content>
        <Image
          src={props.imgsrc}
          alt="err"
        />
        <Product>
          {props.prodname} <Price> `${props.prodprice}`</Price>
        </Product>
      </Content>
    </>
  );
};

export default Card;
