import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import './sidebar.css';

const Nav = styled.div`
  position: fixed;
  background: white;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  z-index: 2;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  visibility: ${({ hideIcon }) => (hideIcon ? 'hidden' : 'visible')};
`;

const SidebarNav = styled.nav`
background: white;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  color: white;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Logo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [hideIcon, setHideIcon] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
    setHideIcon(true);
  };

  const showNavIcon = () => {
    setHideIcon(false);
  };

  return (
    <>
      <IconContext.Provider value={{ color: 'black' }}>
        <Nav>
          {!hideIcon && ( // Dodajte uvjetni prikaz za NavIcon
            <NavIcon to='#' hideIcon={hideIcon}>
              <FaIcons.FaBars onClick={showSidebar} />
            </NavIcon>
          )}
          <Logo src='logo.png' alt='logo' className='logo' height={25.3} />
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={() => {
                showSidebar();
                showNavIcon(); // Prikazuje NavIcon nakon klikanja na AiOutlineClose
              }} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
