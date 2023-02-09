import Head from "next/head";
import {useContext} from "react";
import Footer from "../Components/Footer/Footer";
import Menu from "../Components/Navbar/Menu/Menu";
import Navbar, { lang } from "../Components/Navbar/Navbar";
import {ILayout} from "../Types";
import gsap from 'gsap';
import { LangContext } from "../../pages/_app";

const Layout = ({title, children, description} : ILayout) => {
        const {l} = useContext(LangContext)
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
        const desc = lang(description.en,'We are a well experienced team of developers helping small businesses grow exponentially',l)
    return (

        <div>
            <Head>
                <title>{
                    lang(title.en,title.ar,l)
                    }</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <link
                    rel="shortcut icon"
                    href="https://res.cloudinary.com/dwcu3wcol/image/upload/v1669900311/icoo_yiu32k.png"/>

                {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;700;900&display=swap"
                    rel="stylesheet"/> */}
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap"
                    rel="stylesheet"/>
                <meta
                    name="description"
                    content={`${desc }`}/>

                <meta
                    property="og:title"
                    content={`${title.en || 'Simple Beirut Web | The best and most affordable web agency'}`}/>

                <meta property="og:url" content="https://simplebeirutweb.netlify.app"/>

                <meta
                    property="og:description"
                    content={`${description.en}`}/>

                <meta
                    property="og:image"
                    content="./iconnobg2.jpg"/>

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