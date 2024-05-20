import React from 'react'
import { Container, Typography, Grid, Link } from '@mui/material';
import { styled } from '@mui/system';
import logo from "../UI/Rechakra.png"

const FooterContainer = styled('footer')`
  background-color: hsl(28, 88%, 62%);
  padding: 2rem 0;
  color: black;
`;
const Footer = () => {
  return (
    <FooterContainer>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
           <img src={logo} alt='logo'/>
          </Typography>
          <Typography variant="body2">
            Your one-stop solution for sustainable waste management products.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <ul>
            <li><Link href="#" color="inherit" underline="hover">Home</Link></li>
            <li><Link href="#" color="inherit" underline="hover">Category</Link></li>
            <li><Link href="#" color="inherit" underline="hover">Orders</Link></li>
            {/* <li><Link href="#" color="inherit" underline="hover">Contact</Link></li> */}
          </ul>
        </Grid>
        {/* <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <ul>
            <li><Link href="#" color="inherit" underline="hover">Facebook</Link></li>
            <li><Link href="#" color="inherit" underline="hover">Twitter</Link></li>
            <li><Link href="#" color="inherit" underline="hover">Instagram</Link></li>
          </ul>
        </Grid> */}
      </Grid>
      <Typography variant="body2" align="center" style={{ marginTop: '2rem' }}>
        &copy; {new Date().getFullYear()} Rechakra. All rights reserved.
      </Typography>
    </Container>
  </FooterContainer>
  )
}

export default Footer