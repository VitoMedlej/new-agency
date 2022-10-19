import {Box} from '@mui/material'
import {INavbar} from '../../Types'
import {DragHandle} from '@mui/icons-material';
const Navbar = ({isOpen, setOpen} : INavbar) => {
    return (
        <Box
            sx={{
            width: "100%"
        }}>
            <Box
                sx={{
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                padding: '1em',
                justifyContent:'space-between',
            }}
                className="mw">
                <Box className='center '>
                    <Box sx={{background:'black',width:'2em',height:'2em'}}/>
                </Box>
                <Box className='center cursor'>
                    <DragHandle sx={{color:'black',fontSize:'2em'}}/>
                </Box>
            </Box>
        </Box>
    )
}

export default Navbar