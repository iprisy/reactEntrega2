// src/components/Navbar.js

import React from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineInbox } from 'react-icons/ai';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const NavbarLogo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavbarLinks = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-left: 1rem;
    cursor: pointer;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLogo>Camisetas YUYU</NavbarLogo>
      <NavbarLinks>
        <AiOutlineHome size={24} />
        <AiOutlineUser size={24} />
        <AiOutlineInbox size={24} />
      </NavbarLinks>
    </NavbarContainer>
  );
};

export default Navbar;