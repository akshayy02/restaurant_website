import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { MenuList } from '../Data/data'
const Menu = () => {
    return (
        <Layout>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {
                    MenuList.map(menu =>
                    (
                        <Card sx={{ maxWidth: "350px", display: 'flex', m: 2 }} >
                            <CardActionArea>
                                <CardMedia sx={{ minHeight: '350px' }} component={'img'} src={menu.image} alt={menu.name} />
                                <CardContent>
                                    <Typography variant="h5" gutterBottom component={'div'}>
                                        {menu.name}
                                    </Typography>
                                    <Typography sx={{ color: "#f56f42", fontWeight:"bold" }} variant="h6" gutterBottom component={'div'}>
                                        {menu.price}
                                    </Typography>
                                    <Typography variant="body2">
                                        {menu.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    )
                    )
                }
            </Box>
        </Layout>
    )
}

export default Menu