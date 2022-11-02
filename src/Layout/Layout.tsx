import {Box, Button, Drawer, IconButton} from "@mui/material";
import Head from "next/head";
import {useState} from "react";
import Footer from "../Components/Footer/Footer";
import Menu from "../Components/Navbar/Menu/Menu";
import Navbar from "../Components/Navbar/Navbar";
import {ILayout} from "../Types";
import gsap from 'gsap';

const Layout = ({title, children, description} : ILayout) => {
   
        const animateMenu = (from: string, to : string,hide:boolean) => {
            const tl = gsap.timeline();
            if (!hide) {
                // unhide the menu first then play the animations
                tl.to('.main-menu',{duration:'.01',display:'flex'})
            }
            if (hide) {
                // if we're closing the menu, hide the close button first
                tl.to('.close-btn',{duration:'.01',pointerEvents:'none',opacity:0})
            }
            tl.fromTo('.slide1',{right:from},{duration:'.75',right:to})
            tl.fromTo('.slide2',{left:from},{duration:'.6',left:to},'-=.75')
            tl.fromTo('.slide3',{top:from},{duration:'.6',top:to},'-=.75')
            // if we're opening the menu, show the close button last to avoid users clicking it 
            // while the animations are playing
            !hide && tl.to('.close-btn',{pointerEvents:'all',opacity:1})
            
            if (hide) {
                // hide the menu at the end 
                tl.to('.main-menu',{duration:'.01',display:'none'})
            }
        
        }
    return (

        <div>
            <Head>
                <title>{title || 'My page title'}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <link
                    rel="shortcut icon"
                    href="https://res.cloudinary.com/dwcu3wcol/image/upload/v1666363512/logo_mdwklh.jpg"/>

                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;700;900&display=swap"
                    rel="stylesheet"/>
                <meta
                    name="description"
                    content={`${description || 'Vito Medlej personal portfolio website, A Lebanese web developer an expert in UI' +
                    '/UX and building complex web applications.'}`}/>

                <meta
                    property="og:title"
                    content="Vito Medlej Personal Portfolio | Web Developer To Hire"/>

                <meta property="og:url" content="https://elvito.netlify.app"/>

                <meta
                    property="og:description"
                    content="Vito Medlej is a Web Developer based in Lebanon. And this is my personal Portfolio. "/>

                <meta
                    property="og:image"
                    content="https://res.cloudinary.com/dwcu3wcol/image/upload/v1658929513/log-removebg-preview_fygpsd.png"/>

            </Head>
            {/* <Drawer
                onClose={() => setOpen(false)}
                sx={{
                zIndex: "7777733"
            }}
                anchor={'right'}
                open={isOpen}>
                <Box
                    sx={{
                    width: '270px',
                    pt: '1em'
                }}>
                    <Box
                        sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'end',
                        alignItems:'end',
                        mr:'.25em',
                        flexDirection: 'column',
                    }}>

                        <IconButton onClick={() => setOpen(false)} size="large">
                            <CloseIcon
                                sx={{
                                color: 'red'
                            }}/>
                        </IconButton>
                    </Box>
                    <DrawerMenuItems setOpen={setOpen}/>

                </Box>
            </Drawer> */}
            <Menu animateMenu={animateMenu} />
            <Navbar animateMenu={animateMenu}  />
            <> {children} </> 
            <Footer/>
        </div>
    )

}

export default Layout;