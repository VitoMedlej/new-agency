import {Box, Typography} from '@mui/material'

interface IProjectCard {
    display?: any;
}
const ProjectCard = (display:IProjectCard) => {
    return (
        <Box
            sx={{
           display:display ? display : 'flex',
            width: {
                md: '47%',
                lg: '30%',
            },
            minHeight: '200px',
            height: '100%',
            background: 'white',
            border: '1px solid #ddd',
            borderRadius: '6px',
            padding: '.25em',
        }}>
            <img
                className='img'
                src="https://www.creative4all.com/uploads/portfolio/thumbs/small_ezzeddine.com-8789581.jpg"
                alt=""/>
            <Typography
                sx={{
                fontSize: '1.2em',
                fontWeight: 'bold',
                pt: '.25em'
            }}>
                Project 1
            </Typography>
            <a href='/'>
                elvito.netlify.app
            </a>
        </Box>
    )
}

export default ProjectCard