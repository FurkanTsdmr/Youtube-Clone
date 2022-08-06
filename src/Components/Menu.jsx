import React from 'react'
import styled from 'styled-components'
import YoutubeLogo from '../img/logo.png'

const Container = styled.div`
flex:1;
background-color:#202020;
height:100vh;
color:white;
font-size:14px;
`

const Wrapper = styled.div`
padding:18px 26px;
`
const Logo = styled.div`
display:flex;
align-items:center;
gap:5px;
font-weight:bold;
margin-bottom:25px
`


const Item = styled.div`
display:flex;
align-itemscenter;
gap:20px;
cursor:pointer;
`



const Img = styled.img`
height:25px;
`




export const Menu = () => {
    return (
        <Container>
            <Wrapper>
                <Logo>
                    <Img src={YoutubeLogo} />
                    YoutubeClone
                </Logo>
                <Item>
                    {/* Home Icon Gelcek */}
                    Home
                </Item>
                <Item>
                    {/* Explore Icon Gelcek */}
                    Explore
                </Item>
                <Item>
                    {/* Subscriptions Icon */}
                    Subscriptions
                </Item>
                <Item>
                    {/* library Icon */}
                    Library
                </Item>
                <Item>
                    {/* History Icon */}
                    History
                </Item>
                <Item>
                    {/* <LibraryMusicOutlinedIcon/> */}
                    Music
                </Item>
                <Item>
                    {/* <SportsBasketballOutlinedIcon /> */}
                    Sports
                </Item>
                <Item>
                    {/* <SportsEsportsoutlinedcon /> */}
                    Gaming
                </Item>
                <Item>
                    {/* <MovieOutlinedIcon /> */}
                    Movies
                </Item>
                <Item>
                    {/* <ArticleOutlinedIcon /> */}
                    News
                </Item>
                <Item>
                    {/* <LiveTvOutlinedıcon /> */}
                    Live
                </Item>
                <Item>
                    {/* <SettingsOtlinedIcon /> */}
                    Settings
                </Item>
                <Item>
                    {/* <FlagOutlinedIcon /> */}
                    Report
                </Item>
                <Item>
                    {/* <HelpOutlinedIcon /> */}
                        Help
                </Item>
                <Item>
                    {/* <SettingBrightnessoutlinedIcon /> */}
                    Light Mode
                </Item>
            </Wrapper>
        </Container>
    )
}
