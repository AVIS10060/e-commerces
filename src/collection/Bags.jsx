import styled from "styled-components"
import Data from "./Data";
import Card from "./Card"
import SortNav from "../SortNav"

const Container = styled.div`
display:flex;
flex-wrap:wrap;
`



const Bags = () => {
  return (
    <>
      <Container>
      <SortNav/>
      </Container>
      </>
    );
  };
  
  export default Bags;
  