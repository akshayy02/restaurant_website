import React from 'react'
import Layout from '../components/Layout/Layout'

import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const contact = () => {
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
          border: '1px solid #ffab91',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ color: '#d84315', marginBottom: '20px', textAlign: 'center' }}>
          Contact Us
        </Typography>
        <TableContainer component={Paper} sx={{ boxShadow: 'none', backgroundColor: 'transparent' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', color: '#6d4c41' }}>Contact Method</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#6d4c41' }}>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell>contact@akshaysrestaurant.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Toll-Free Number</TableCell>
                <TableCell>1800-123-xxxx</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Telephone Number</TableCell>
                <TableCell>+91-xxx-2345678</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default contact