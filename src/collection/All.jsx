import Data from "./Data";
import Card from "./Card";
import styled from "styled-components"

const Container = styled.div`
display:flex;
flex-wrap:wrap;
`

const All = () => {
  return (
    <>
      <Container>
        {Data.map((val,ind) => {
          return (<Card 
          key={ind} 
          imgsrc={val.imgsrc} 
          prodname={val.prodname} 
          prodprice={val.prodprice}/>
)})}
      </Container>
    </>
  );
};

export default All;
