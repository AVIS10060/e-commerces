import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Nav = styled.div`
  position: relative;
  bottom: 0px;
  left: 70px;
  background-color: rgb(23, 23, 23);
  width: 90vw;
  height: 300px;
  border-top: 1px solid grey;
  color: white;
  display: flex;
`;

const Div = styled.div`
  display: flex;
  margin-left: 20px;
  margin: 48px;
`;

const Name = styled.h3`
  margin-left: 10px;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    color: #efe3e3 !important;
  }
`;

const Image = styled.img`
  width: 45px;
  height: 45px;
  object-fit: cover;
  border-radius: 5px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;
const MenuList = styled.ul`
  margin: 5px;
  padding: 10px;
`;

const MenuListItem = styled.li`
  color: white !important;
  list-style-type: none;
  padding: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const Copy = styled.p`
  font-size: 16px;
  
  width: 100%;
  border-top: 1px solid grey;
  heigth: 110px;
  padding-top: 30px;
  padding-left: 90px;
  padding-bottom:10px
  overflow-y: hidden;
`;

const Navbar = () => {
  return (
    <>
      <Outlet />
      <Nav>
        <Div>
          <Image src="https://picsum.photos/id/237/200/300" alt="logo"></Image>
          <Name>
            <NavLink to="home">THE MODERN STORE</NavLink>
          </Name>
        </Div>
        <Menu>
          <MenuList>
            <MenuListItem>
              <NavLink to="home" activeClassName="active" className="inative">
                Home
              </NavLink>
            </MenuListItem>
            <MenuListItem>
              <NavLink to="/about" activeClassName="active" className="inative">
                About
              </NavLink>
            </MenuListItem>
            <MenuListItem>
              <NavLink
                to="/terms&conditions"
                activeClassName="active"
                className="inative"
              >
                Terms & Conditions
              </NavLink>
            </MenuListItem>
            <MenuListItem>
              <NavLink to="/FAQ" activeClassName="active" className="inative">
                FAQ
              </NavLink>
            </MenuListItem>
            <MenuListItem>
              <NavLink
                to="/shipping"
                activeClassName="active"
                className="inative"
              >
                Shipping & Return Poicy
              </NavLink>
            </MenuListItem>
            <MenuListItem>
              <NavLink
                to="/privacy&policy"
                activeClassName="active"
                className="inative"
              >
                Privacy Policy
              </NavLink>
            </MenuListItem>
          </MenuList>
        </Menu>
      </Nav>
      <Copy>&copy; CopyRight 2023 , Inc | Designed in India</Copy>
    </>
  );
};
export default Navbar;
