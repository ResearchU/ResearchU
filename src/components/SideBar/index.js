import React from 'react'
import {MdNightlightRound} from 'react-icons/md'
import { HiMoon } from "react-icons/hi";
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SideBtnWrap, SidebarRoute, SidebarMenu, NightModeIconRespo} from './SidebarElements';

const Sidebar = ({ isOpen , toggle}) => {
    const icon = <HiMoon/>
    function myButton() {
        var click = document.body
        click.classList.toggle("dark-theme")
    }
    return (
        <SidebarContainer isOpen = {isOpen} onClick = {toggle}>
            <Icon onClick = {toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to ="/" onClick= {toggle}>Home</SidebarLink>
                    <SidebarLink to ="/About" onClick= {toggle}>About</SidebarLink>
                    <SidebarLink to ="/Contact" onClick= {toggle}>Contact</SidebarLink>
                    <SidebarLink to ="/SignIn" onClick= {toggle}>Sign In</SidebarLink>                    
                    {/* <SidebarLink to ="/darkmode" onClick= {toggle}><MdNightlightRound/></SidebarLink> */}
                    <SidebarRoute to = "/SignUp" onClick= {toggle}>Sign Up</SidebarRoute>
                    <NightModeIconRespo onClick={myButton}>
                             {icon}
                    </NightModeIconRespo>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
