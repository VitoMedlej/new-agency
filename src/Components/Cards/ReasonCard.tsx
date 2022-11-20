import {Box, Typography} from "@mui/material"
import {useRouter} from "next/router";
import { useContext } from "react";
import { LangContext } from "../../../pages/_app";
import {lang} from "../Navbar/Navbar"

const ReasonCard = ({className}:any) => {
    const router = useRouter()
    const {l} = useContext(LangContext)

    return (
        <Box
        className={`z${className}`}
            sx={{
                margin:'.5em',
            minHeight: {
                xs: '100px',
                sm: '120px'
            },
            transition: 'all .3s ease',
            maxWidth: '700px',
            ':hover': {
                background: '#8080803b'
            },
            border : '1px solid #80808036',
            borderRadius: '6px',
            width: {
                xs: '100%',
                sm: '90%',
                md : '40%',
                lg: '45%'
            }
            ,padding:'1em',
            display :'flex'
        }}>
            <Box className='reason-icon' >
                <img src="https://www.svgrepo.com/show/428104/browser.svg" alt="" />
            </Box>
            <Box>
                <Typography sx={{color:'#2f2f2f',pb:'.15em',fontSize:'2em'}}>
                    {lang('Title hello', 'اسم', l)}
                </Typography>
                <Typography
                    sx={{
                    alignItems: 'center',
                    width: {
                        xs: '100%',
                        md: '95%'
                    },
                    display: 'flex',
                    color: '#000000b8',
                    fontWeight: '400',
                    fontSize: {
                        xs: '.9em',
                        sm: '1em',
                        lg: '1.2em'
                    }
                }}>
                    {lang('  Web design? web development? doesnt matter! Get your effective website today f' +
                            'or a price of a t-shirt.',
                    'تصمبم ويب؟ تطوبر ويب؟ لايهم لاننا قادرين على تطوير كل ما تريد بسعر بيدزا', `${l}`)}
                </Typography>
            </Box>
        </Box>
    )
}

export default ReasonCard