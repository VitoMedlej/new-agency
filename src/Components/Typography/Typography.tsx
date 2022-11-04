import {Box, Typography} from '@mui/material'
import {useRouter} from 'next/router'
import {lang} from '../Navbar/Navbar'

interface ITypo {
    en : string;
    ar?: string;

}
const Typo = ({en, ar} : ITypo) => {

    const router = useRouter()
    const {l} = router.query

    return (
        <Typography>
            {ar && en
                ? lang(en, ar, l)
                : en
}
        </Typography>
    )
}

export default Typo