import styled from "styled-components"

const Main = styled.div`
display:flex;
flex-direction:column;
width:15vw;
min-height:80vh;
border:2px solid red;
position:fixed;
right:0%;
margin:10px;
padding:10px;`


const Head = styled.h5`
color:grey;
`
const SortList = styled.ul`
list-style-type:none;
cursor:pointer;
`
const SortItem = styled.li`
color:white;
padding:5px;
&:active{
    text-decoration:underline;
}
`
const SortNav = () =>{
    return (
        <>
        <Main>
    
        <Head>Sort by</Head>
        
        <SortList>
            <SortItem>Relevance</SortItem>
            <SortItem>Trending</SortItem>
            <SortItem>Latest arrivals</SortItem>
            <SortItem>Price:Low to high</SortItem>
            <SortItem>Price:High to Low</SortItem>
        </SortList>
        </Main>
        </>
    )
}

export default SortNav;