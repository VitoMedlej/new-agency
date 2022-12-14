import {Box, Typography} from '@mui/material'

interface IProjectCard {
    sx?: any;
    className : string;
    data : {
        title : string;
        href : string;
        img : string;
    }
}
const ProjectCard = ({sx,className,data}:IProjectCard) => {
    
    return (
        <Box
        className={`${className} PC`}
            sx={{
            ...sx,
            width: {
                xs : '95%',
                sm: '47%',
                md : '40%',
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
                src={`${data.img}`}
                alt="Project Image"/>
            <Typography
                sx={{
                fontSize: '1.2em',
                fontWeight: 'bold',
                pt: '.25em'
            }}>
                {data.title}
            </Typography>
            <a href={data.href}>
            {data.href}

            </a>
        </Box>
    )
}

export default ProjectCard