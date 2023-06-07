import React from 'react';
import {  Container, Typography, Stack, Divider } from '@mui/material';
import PinDropIcon from '@mui/icons-material/PinDrop';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import Map from '../components/Map/Map'
import office from '../logos/AllegianceOffice2.jpg'
import ContactForm from '../components/ContactForm/ContactForm'

function ContactUs() {
  

  return (
    <>
      <Container>
      <Typography variant="h5"sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'left',
          alignItems: 'left',
          paddingTop: '150px'
        }}> 
      GET IN TOUCH
      </Typography>
      <Typography variant="h4"sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'left',
          alignItems: 'left',
          paddingTop: '25px'
        }}> 
      LET US HELP YOU ACHIEVE YOUR GOALS!
      </Typography>
      <Stack direction="row" 
      sx={{marginTop: '15px',marginBottom: '15px', paddingLeft: '5px',paddingRight: '5px' }} 
      divider={<Divider orientation="vertical" flexItem />} 
      spacing={2} 
      useFlexGap flexWrap="wrap"
      justifyContent="center">
        <div><Typography variant='caption'><PinDropIcon/>Address:299 South Main Street, Suite 1300 Salt Lake City, UT 84111</Typography></div>
        <div><Typography variant='caption'><ForwardToInboxIcon/>info@allegiancegroup-inc.com </Typography></div>
        <div><Typography variant='caption'><LocalPhoneIcon/>Phones:(801) 993-0101; (888) 308-6808 </Typography></div>
      </Stack>
      <Stack direction="row" 
      sx={{marginTop: '15px',marginBottom: '15px', paddingLeft: '5px',paddingRight: '5px' }} 
      divider={<Divider orientation="vertical" flexItem />} 
      spacing={2} 
      useFlexGap flexWrap="wrap"
      justifyContent="center">
      <div>
      <p>GET IN TOUCH WITH US</p>
      <ContactForm></ContactForm>
      </div>
      <div>
      <p>FIND US ON THE MAP</p><Map></Map> 
      </div>
      <div>
      <p>OUR OFFICE</p>
      <img src={office} alt='OfficeImage' />
      </div>
                </Stack>
      </Container>
       
    
    </>
  );
}

export default ContactUs;
