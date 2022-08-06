import React from 'react'
import styled from 'styled-components'
import YoutubeLogo from '../img/logo.png'

const Container = styled.div`
flex:1;
background-color:${({theme})=>theme.bg};
height:100vh;
color:${({theme})=>theme.text};;
font-size:14px;
position:sticky;
top:0;
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
padding:7.5px 0px;
`

const Hr = styled.hr`
margin:15px 0px;
border:0.5px solid ${({theme})=>theme.soft};

`



const Login = styled.div`

`


const Button = styled.button`
padding:5px 15px;
background-color:transparent;
border:1px solid #3ea6ff;
color:#3ea6ff;
border-radius:5px;
font-weight:500;
margin-top:10px
cursor:pointer; 
display:flex;
align-items:center;
gap:5px;
`





const Img = styled.img`
height:25px;
`




export const Menu = ({darkMode,setDarkMode}) => {
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
                <Hr/>
                <Item>
                    {/* library Icon */}
                    Library
                </Item>
                <Item>
                    {/* History Icon */}
                    History
                </Item>
                <Hr/>
                <Login>
                    Sign in to like videos,comment,and subscribe.
                    <Button>{/* <AccountCircleOutlinedIcon/> */}SIGN IN</Button>
                </Login>
                <Hr/>
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
                <Hr/>
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
                <Item onClick={()=>setDarkMode(!darkMode)}>
                    {/* <SettingBrightnessoutlinedIcon /> */}
                    Light Mode
                </Item>
            </Wrapper>
        </Container>
    )
}
