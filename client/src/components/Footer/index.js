import React from 'react';
import { Container, Link, Stack, Divider, Typography } from '@mui/material';
import smallLogo from '../../logos/agsmall.png'
import PinDropIcon from '@mui/icons-material/PinDrop';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import './footer.scss'

const Footer = () => {
  
  return (
    <div id='footer'>
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '50px',
      paddingTop: '15px'
    }}>
        <img id='smallLogo' src={smallLogo} alt='SmallLogo' />
      <Stack direction="row" id="stackLinks" sx={{ marginTop: '15px',marginBottom: '15px', paddingLeft: '5px',paddingRight: '5px' }} divider={<Divider orientation="vertical" flexItem />} spacing={{ xs: 1, sm: 2, md: 4 }}>
        <Link id='link' href="/" sx={{color: 'black', textTransform: 'none', textDecoration: 'none'}}>Home</Link>
        <Link id='link' href="/quickbooks" sx={{color: 'black', textTransform: 'none', textDecoration: 'none'}}>QuickBooks</Link>
        <Link id='link' href="/taxservices" sx={{color: 'black', textTransform: 'none', textDecoration: 'none'}}>Tax Services</Link>
        <Link id='link' href="/contact" sx={{color: 'black', textTransform: 'none', textDecoration: 'none'}}>Contact Us</Link>
      </Stack>
      <Stack direction="row" sx={{marginTop: '15px',marginBottom: '15px', paddingLeft: '5px',paddingRight: '5px' }} divider={<Divider orientation="vertical" flexItem />} spacing={{ xs: 1, sm: 2, md: 4 }}>
        <div><Typography variant='caption'><PinDropIcon/>Address:299 South Main Street, Suite 1300 Salt Lake City, UT 84111</Typography></div>
        <div><Typography variant='caption'><LocalPhoneIcon/>Phones:(801) 993-0101; (888) 308-6808 </Typography></div>
      </Stack>
      <Stack direction="row" sx={{marginTop: '15px',marginBottom: '15px' }} divider={<Divider orientation="vertical" flexItem />} spacing={{ xs: 1, sm: 2, md: 4 }}>
      
      <Link sx={{color: 'black', textTransform: 'none', textDecoration: 'none'}} href="https://www.facebook.com/"  target="_blank" >
        <FacebookIcon />
      </Link>
      <Link sx={{color: 'black', textTransform: 'none', textDecoration: 'none'}} href="https://twitter.com/"  target="_blank" >
        <TwitterIcon/>
      </Link>
      <Link sx={{color: 'black', textTransform: 'none', textDecoration: 'none'}} href="https://www.linkedin.com"  target="_blank" >
        <LinkedInIcon/>
      </Link>
      <Link sx={{color: 'black', textTransform: 'none', textDecoration: 'none'}} href="https://www.pinterest.com"  target="_blank" >
        <PinterestIcon/>
      </Link>
      <Link sx={{color: 'black', textTransform: 'none', textDecoration: 'none'}} href="https://www.instagram.com"  target="_blank" >
       <InstagramIcon/>
      </Link>
      </Stack>
      <Typography variant='caption'>
        © 2023 Allegiance Group, Inc.. All Rights Reserved.
      </Typography>


    </Container>
    </div>
  );
};

export default Footer;
