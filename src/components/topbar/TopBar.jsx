import { NotificationsNone, Settings, Language } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
    position : sticky;
    top : 0;
    z-index: 999;
`;
const TopBarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    height: 100%;
`;

const TopBarLeft = styled.div`
    display: flex;
    align-items: center;
`;

const TopBarRight = styled.div`
    display: flex;
    align-items: center;
`;

const TopBarIconContainer = styled.div`
    position: relative;
    cursor: pointer;
    margin-right: 10px;
    color: #555;
`;

const TopIconBadge = styled.span`
    position: absolute;
    top: -5px;
    right: 0px;
    background-color: red;
    color: white;
    border-radius: 50%;
    height: 15px;
    width: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
`;

const Logo = styled.span`
    font-weight: bold;
    font-size: 30px;
    color: darkblue;
    cursor: pointer;
`;

const TopAvatar = styled.img`
    height : 40px;
    width : 40px;
    border-radius : 50%;
    cursor : pointer;
`;

const TopBar = () => {
    return (
        <Container>
            <TopBarWrapper>
                <TopBarLeft>
                    <Logo>lamaadmin</Logo>
                </TopBarLeft>
                <TopBarRight>
                    <TopBarIconContainer>
                        <NotificationsNone />
                        <TopIconBadge>2</TopIconBadge>
                    </TopBarIconContainer>
                    <TopBarIconContainer>
                        <Language />
                    </TopBarIconContainer>
                    <TopBarIconContainer>
                        <Settings />
                    </TopBarIconContainer>
                    <TopAvatar src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                </TopBarRight>
            </TopBarWrapper>
        </Container>     
        
           
    );
};

export default TopBar;
