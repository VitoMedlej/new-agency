import { Box } from "@mui/material"

const Dots = ({color}:{color?:string}) => {
  return (
    <Box
    sx={{
      backgroundImage: `radial-gradient(${color || '#ffffff82'} 1.3px, transparent 0) !important`
    }}
    className='dotted'>

    </Box>
  )
}

export default Dots