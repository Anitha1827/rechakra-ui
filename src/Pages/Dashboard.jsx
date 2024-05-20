import React from 'react'
import Base from '../Base/Base.jsx'
import "../Pages/Dashboard.css"
import { Container, Typography, Button, Card, CardContent, CardMedia, Grid } from '@mui/material';
import { styled } from '@mui/system';
import reuseable from "../UI/reuseable.jpg"
import compcost from "../UI/Compost.jpg"
import bin from "../UI/shoping.jpg"
import food from "../UI/food.jpg"
import electronic from "../UI/electronics-recycling.jpg"
import plastic from "../UI/plastic.jpg"
import Footer from '../Base/Footer.jsx';


const HeroSection = styled('div')`
  @apply bg-green-500 text-white py-20;
`;

const Dashboard = () => {
  return (
    <>
   <Base/>
    <div className='w-[95%] p-5 '>
    <div className="App">
      <HeroSection>
        <Container maxWidth="md" className="text-center">
          <Typography variant="h2" component="h1" className="mb-6">
            Welcome to ReChakra
          </Typography>
          <Typography variant="h5" component="p" className="mb-6">
            Your one-stop solution for sustainable waste management products.
          </Typography>
          <Button variant="contained" color="secondary" size="large">
            Shop Now
          </Button>
        </Container>
      </HeroSection>

      <Container className="py-12">
        <Typography variant="h4" component="h2" className="text-center mb-8">
          Our Products
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <ProductCard 
              image={reuseable}
              title="Recycling Bin"
              description="High-quality recycling bin for your home or office."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProductCard 
              image={compcost}
              title="Compost Bin"
              description="Eco-friendly compost bin for organic waste."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProductCard 
              image={bin}
              title="Reusable Bags"
              description="Durable reusable bags to reduce plastic waste."
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ProductCard 
              image={food} 
              title="Food Recycling"
              description="High-quality recycling bin for your home or office."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProductCard 
              image={electronic}
              title="Electronic"
              description="Eco-friendly compost bin for organic waste."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProductCard 
              image={plastic}
              title="Plastic"
              description="Durable reusable bags to reduce plastic waste."
            />
          </Grid>
          
        </Grid>
      </Container>
    </div>
    </div>
   <Footer/>
   </>
  )
}


// Product Card
const ProductCard = ({ image, title, description }) => (
  <Card className="max-w-sm mx-auto">
    <CardMedia component="img" height="140" image={image} alt={title} />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
      <Button variant="contained" color="primary" className="mt-4">View</Button>
    </CardContent>
  </Card>
);

export default Dashboard