import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import Data from "./Data";

const Divider = styled.div`
  display: flex;
  margin: 10px;
  padding: 10px;
`;

const MainDiv = styled.div`
  font-size: 13px;
  width: 10vw;
  color: grey;
  margin: 10px;
`;
const List = styled.ul`
  color: white;
  font-size: 14px;
`;
const ListItem = styled.li`
  list-style-type: none;
  padding: 5px;
  font-size: 14px;
`;

const bagFilter = (item) =>{
  return Data.filter((item)=>
  item.name==="Bags")
}
const SideNav = () => {
  return (
    <>
      <Divider>
        <MainDiv>
          Collections
          <List>
            <ListItem>
              <NavLink to="/search">All</NavLink>
            </ListItem>
            <ListItem>
              <NavLink exact={true} to="/search/bags" onClick={bagFilter}>
                Bags
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink exact={true} to="/search/electronics">
                Electronics
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink exact={true} to="/search/jackets">
                Jackets
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink exact={true} to="/search/kids">
                Kids
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink exact={true} to="/search/shirts">
                Shirts
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink exact={true} to="/search/headware">
                Headware
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink exact={true} to="/search/hoodie">
                Hoodie
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink exact={true} to="/search/footware">
                Footware
              </NavLink>
            </ListItem>
          </List>
        </MainDiv>
        <Outlet />
      </Divider>
    </>
  );
};

export default SideNav;
