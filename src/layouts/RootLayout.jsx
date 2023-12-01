import { Grid, GridItem } from '@chakra-ui/react';
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

export default function RootLayout () {
    return (
      <Grid templateColumns='repeat(6, 1fr)' bg='gray.50'>
        <GridItem
        as='aside'
        colSpan={{base: '6', lg: '2', xl:'1'}}
        bg='gray.500'
        minHeight={{lg: '100vh'}}
        p={{base: '20px', lg: '30px'}}
        pt={{lg: '35px'}}
        // mx={{base: '15px'}}
        // borderRadius={{base: '5px'}}
        >
          <Sidebar />
 
        </GridItem>

        <GridItem
        as='main'
        colSpan={{base: '6', lg: '4', xl: '5'}}
        p={{base: '20px', lg: '30px'}}
        >
          <Navbar />
          <Outlet />
        </GridItem>
        
      </Grid>
    );
  }
  
  