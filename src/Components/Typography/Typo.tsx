import {Box, Typography} from '@mui/material'
import {useRouter} from 'next/router'
import {lang} from '../Navbar/Navbar'

interface ITypo {
    en : string;
    ar?: string;
    className ?: string;
    sx ?: any

}
const Typo = ({en, ar,sx,className} : ITypo) => {

    const router = useRouter()
    const {l} = router.query

    return (
        <Typography 
        sx={{
            ...sx
        }}
        className={className}>
            {ar && en
                ? lang(en, ar, l)
                : en
}
{/* https://www.creative4all.com/uploads/portfolio/thumbs/small_ezzeddine.com-8789581.jpg */}
        </Typography>
    )
}

export default Typo