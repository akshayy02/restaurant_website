import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Typography } from '@mui/material'
const Footer = () => {
    return (
        <>
            <Box sx={{ textAlign: 'center', bgcolor: '#1A1a19', color: "white", p: 1 }}>
                <Box sx={{my:1, "& svg": {
                    fontSize:"40px",
                    cursor:'pointer',
                    mr:2,
                },
                "& svg:hover":{
                    color: "goldenrod",
                    transform: "translateY(-5px)",
                    transition: "all 400ms",
                }
                }}>
                    <InstagramIcon />
                    <YouTubeIcon />
                    <XIcon />
                    <GitHubIcon />
                </Box>
                <Typography variant="h6" sx={{ "@media(max-width:600px)": { fontSize: "1rem" } }}>
                    All Rights Reserved &copy; Akshay Patidar
                </Typography>
            </Box>
        </>

    )
}

export default Footer