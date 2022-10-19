import {Box} from '@mui/material'
import {INavbar} from '../../Types'
import {DragHandle} from '@mui/icons-material';
const Navbar = ({isOpen, setOpen} : INavbar) => {
    return (
        <Box
            sx={{
            background: 'black',
            height: '40px',
            width: "100%"
        }}>
            <Box
                sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'end',
                height: '100%',
                padding: '1em'
            }}
                className="mw">
                <Box>
                    <DragHandle sx={{color:'black'}}/>
                </Box>
            </Box>
        </Box>
    )
}

export default Navbar