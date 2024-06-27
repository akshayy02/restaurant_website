import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
    return (
        <Layout>
            <Box
                sx={{
                    padding: '30px',
                    backgroundColor: '#fff3e0',
                    borderRadius: '15px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    maxWidth: '800px',
                    margin: '20px auto',
                    border: '1px solid #ffab91'
                }}
            >
                <Typography variant="body1" component="div" sx={{ color: '#4e342e', lineHeight: 1.7 }}>
                    <h1 style={{ color: '#d84315', fontSize: '2.5em', marginBottom: '20px', textAlign: 'center' }}>About Us</h1>
                    <p style={{ marginBottom: '20px', textAlign: 'justify' }}>
                        Welcome to Akshay's Restaurant, where culinary excellence meets a warm, inviting atmosphere. Located in the heart of New Market, Bhopal, we pride ourselves on offering a delightful dining experience.
                    </p>

                    <h2 style={{ color: '#ff5722', fontSize: '2em', marginBottom: '15px' }}>Our Story</h2>
                    <p style={{ marginBottom: '20px', textAlign: 'justify' }}>
                        Akshay's Restaurant is the brainchild of Akshay Patidar, a passionate food enthusiast dedicated to bringing you the best in gourmet cuisine. Our journey began with a vision to create a space where friends and family can come together to enjoy delicious food, great company, and memorable moments.
                    </p>

                    <h2 style={{ color: '#ff5722', fontSize: '2em', marginBottom: '15px' }}>Our Location</h2>
                    <p style={{ marginBottom: '20px', textAlign: 'justify' }}>
                        Nestled in the bustling area of New Market, Bhopal, our restaurant is easily accessible and perfect for any occasion. Whether you're looking for a casual lunch, a romantic dinner, or a place to celebrate special events, Akshay's Restaurant is the ideal destination.
                    </p>

                    <h2 style={{ color: '#ff5722', fontSize: '2em', marginBottom: '15px' }}>Our Commitment</h2>
                    <p style={{ marginBottom: '10px', textAlign: 'justify' }}>At Akshay's Restaurant, we are committed to:</p>
                    <ul style={{ marginLeft: '20px', marginBottom: '20px', color: '#6d4c41' }}>
                        <li style={{ margin: '10px 0', fontSize: '1.1em' }}>
                            <strong>Quality Ingredients:</strong> We use the freshest ingredients to create mouth-watering dishes that cater to all taste buds.
                        </li>
                        <li style={{ margin: '10px 0', fontSize: '1.1em' }}>
                            <strong>Exceptional Service:</strong> Our friendly and attentive staff ensure that every visit is a pleasant experience.
                        </li>
                        <li style={{ margin: '10px 0', fontSize: '1.1em' }}>
                            <strong>Innovative Menu:</strong> Our diverse menu features a blend of traditional and contemporary dishes, ensuring there's something for everyone.
                        </li>
                    </ul>
                    <p style={{ textAlign: 'justify' }}>
                        Join us at Akshay's Restaurant and discover why we are Bhopal's favorite dining spot. We look forward to serving you!
                    </p>
                </Typography>
            </Box>
        </Layout>
    )
}

export default About