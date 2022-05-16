import { Box, Button, Typography } from '@material-ui/core';
import React from 'react'
import './Header.css'
const Home = () => {
  return <div>
      <Box display="flex" flexDirection = "column" alignItems="center">
          <Button style={{marginTop:260, background: "pink"}} Link href="/books" variant="contained">
              <Typography style={{color:"white"}} variant="h3">Latest News From HollyWood</Typography>
          </Button>
      </Box>
  </div>;
};

export default Home;