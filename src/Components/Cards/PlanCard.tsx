import {Box, Button, ListItem} from '@mui/material'
import { useRouter } from 'next/router';
import { MultiLang } from '../../Types';
import { lang } from '../Navbar/Navbar';
import Typo from '../Typography/Typo';


interface PlanCard {
    rtl ?: string ;
    isFeatured :boolean;
    price : {en : number | string, ar : number | string};
    title : MultiLang;
    planFeatures : MultiLang[];
    description : MultiLang;
}
const PlanCard = ({
    rtl ,
    price,
    title,
    isFeatured,
    description
    ,planFeatures
}
:PlanCard) => {
    const router = useRouter();
    const {l} = router.query;
    return (
        <Box
            sx={{
            position : 'relative',
            padding: '1em',
            textAlign: lang('left', 'right', l),
            transform: isFeatured ? {md:'translateY(-10%)'} : 0,
            width: {
                xs: '95%',
                sm : '43%',
                md: '340px'
            },
            minHeight: {xs:'400px',md:'550px'},
            background: 'white',
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
            borderRadius: '7px'
        }}>
            <Typo
                sx={{
                color: '#e6c200',
                position : 'absolute',
                right : '50%',
                transform : 'translateX(50%)',
                opacity:  isFeatured ? 1 : 0,
                textAlign: 'center',
                fontWeight: 'bold'
            }}
                en='Recommended'
                ar='ينصح به'/>
            <Typo
                sx={{
                fontWeight: 'bold',
                fontSize: '2em',
                pt: '.75em'
            }}
                en={title.en}
                ar={title.ar}/>
            <Typo
                sx={{
                color: '#707070'
            }}
                en={description.en}
                ar={description.ar}/>
            <Typo
                sx={{
                fontWeight: '100',
                fontSize: '3.5em'
            }}
                en={`$${price.en}`}
                ar={`$${price.ar}`}/>
            <Button
                sx={{
                width: '90% !important',
                mt: '1em',
                mb: '2em',
                borderRadius: '900px'
            }}
                className='btn b1'>
                <Typo en='Get Started' ar='ابداء'/>
            </Button>
            <Box className='list'>

                <Typo
                    sx={{
                    fontWeight: '600'
                }}
                    en='Recommended'
                    ar=' : تضمن'/>

                <ul className={rtl == 'true' ? 'drrtl' : ''}>
                    
                    {planFeatures.map((feature,idx:number)=>{

                       return <li>
                        <Typo
                        key={idx}
                        en={feature.en} ar={feature.ar}/>
                    </li>
                    })}
                 
                   
                </ul>

            </Box>
        </Box>
    )
}

export default PlanCard