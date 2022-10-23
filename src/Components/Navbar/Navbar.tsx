import {Box, Button, Typography} from '@mui/material'
import {INavbar} from '../../Types'
import {DragHandle} from '@mui/icons-material';

const Navbar = ({isOpen, setOpen} : INavbar) => {
    return (
        <Box
            sx={{
            boxShadow: '1px 1px 5px #00000012',
            width: "100%"
        }}>
            <Box
                sx={{
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                padding: '1em',
                justifyContent: 'space-between'
            }}
                className="mw">
                <Box sx={{width:'100px'}} className='center '>
                    
                     <img className='img' src="/bwa.JPG" alt="BWA logo" />
                </Box>
                <Box className='center '>
                    <Button sx={{
                        mx: '1em'
                    }}>

                        <Typography className='cursor' color='black'>
                            العربية
                        </Typography>
                    </Button>
                    <DragHandle
                        className='cursor'
                        sx={{
                        color: 'black',
                        fontSize: '2em'
                    }}/>
                </Box>
            </Box>
        </Box>
    )
}

export default Navbar