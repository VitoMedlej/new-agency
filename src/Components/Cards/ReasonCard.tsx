import {Box, Typography} from "@mui/material"
import {useContext} from "react";
import {LangContext} from "../../../pages/_app";
import {IReasonCard} from "../../Types";
import {lang} from "../Navbar/Navbar"
import Typo from "../Typography/Typo";

const ReasonCard = ({className, title, text,img} : IReasonCard) => {
    const {l} = useContext(LangContext)

    return (
        <Box
            className={`z${className}`}
            sx={{
            margin: '.5em',
            minHeight: {
                xs: '100px',
                sm: '120px'
            },
            transition: 'all .3s ease',
            maxWidth: '700px',
            ':hover': {
                background: '#8080803b'
            },
            border: '1px solid #80808036',
            borderRadius: '6px',
flexDirection: lang('row', 'row-reverse', l),
            width: {
                xs: '100%',
                sm: '90%',
                md: '40%',
                lg: '45%'
            },
            padding: '1em',
            display: 'flex'
        }}>
            <Box className='reason-icon'>
                <img src={img} alt="Reason Icon"/>
            </Box>
            <Box sx={{textAlign:lang('left','right',l),width:'95%'}}>

                <Typo
                    sx={{
                    color: '#2f2f2f',
                    pb: '.25em',
                    fontSize: '2em'
                }}
                    en={title.en}
                    ar={title.ar}/>

                <Typo
                    sx={{
                    alignItems: 'center',
                    justifyContent:lang('left','right',l),
                    display: 'flex',
                    color: '#000000b8',
                    fontWeight: '400',
                    fontSize: {
                        xs: '.9em',
                        sm: '1em',
                        lg: '1.2em'
                    }
                }}
                    en={text.en}
                    ar={text.ar}/>

            </Box>
        </Box>
    )
}

export default ReasonCard