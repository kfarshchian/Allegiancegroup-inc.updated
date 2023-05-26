import React from 'react';
import { Typography, Container, Stack, Divider } from '@mui/material';
import certs from '../logos/QBCert.png';
import deskImg from '../logos/pexels-fauxels-3184292.jpg'
import handShake from '../logos/handshake.jpg'
import lookAtPC from '../logos/lookAtPC.jpg'
import pointOfSale from '../logos/Quickbooks-2010-1-copy.jpg'



function QuickBooks() {
  

  return (
    <>
      <div id='mainBody'>
      <Container sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}> 
      <Typography variant="h4"sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}> 
      QuickBooks
      </Typography>

     
        <Container sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <img id='banner' src={certs} alt='certs'/>
        </Container>
        <Container sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Typography variant="h5"sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '75%',
        }}> 
          <p>We offer a very comprehensive QuickBooks Sales, Training & Support department to address all of our clients’ needs. We also offer instructor-led, hands-on QuickBooks training for beginners and advance QuickBooks users.</p>
        </Typography >
        </Container>
        <Typography variant="h5"sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
            <p>Our QuickBooks Services</p>
          </Typography>
          <Stack 
          alignItems="center" 
          divider={<Divider orientation="vertical" flexItem />} 
          spacing={2} 
          direction="row" 
          useFlexGap flexWrap="wrap"
          justifyContent="center"
          >
            <ul>
              <li>QuickBooks Setup / New Company Set-up</li>
              <li>QuickBooks Maintenance & Cleanup</li>
              <li>QuickBooks Periodic Services</li>
              <li>QuickBooks Consulting</li>
              <li>QuickBooks Payroll</li>
              <li>QuickBooks Instructor-led Hands-on Training</li>
            </ul>
           
            <img id='deskImg' src={deskImg} alt='' />
            
          </Stack>
          <Typography variant="h5"sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
            <p>Products</p>
          </Typography>
          <Stack 
          alignItems="center" 
          divider={<Divider orientation="vertical" flexItem />} 
          spacing={2} 
          direction="row" 
          useFlexGap flexWrap="wrap"
          justifyContent="center"
          >
            <ul>
              <li>We support all QuickBooks products: Pro, Premier, Enterprise Solutions, Point of Sale, & Online.
                 We are also adept at implementing technological solutions for, but not limited to, QuickBooks and the latest
                  Payroll Software, Third Party Software that interface with QuickBooks and Payment Solutions.</li>
            </ul>
           
            <img id='deskImg' src={deskImg} alt='' />
            
          </Stack>
          </Container>
        <Container>
          <Typography variant="h5"sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
            <p>Our Staff's Professional Designations:</p>
          </Typography>
          <Stack 
          alignItems="center" 
          divider={<Divider orientation="vertical" flexItem />} 
          spacing={2} 
          direction="row" 
          useFlexGap flexWrap="wrap"
          justifyContent="center"
          >
           
            <ul>
              <li>QuickBooks Advanced ProAdvisors</li>
              <li>CPAs (Certified Public Accountant)</li>
              <li>Accountants</li>
              <li>Tax Preparer</li>
            </ul>
           
            <img id='deskImg' src={deskImg} alt='' />
            
          </Stack>
        </Container>
        <Container>
          <Typography variant="h5"sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
            <p>We Offer Support On All Of The Following Products:</p>
          </Typography>
          <Stack 
          alignItems="center" 
          divider={<Divider orientation="vertical" flexItem />} 
          spacing={2} 
          direction="row" 
          useFlexGap flexWrap="wrap"
          justifyContent="center"
          >
           <img id='handShake' src={handShake} alt='' />
            <ul>
              <li>QuickBooks Point of Sale</li>
              <li>QuickBooks Pro</li>
              <li>Quick Books Premier</li>
              <li>QuickBooks Enterprise Solutions</li>
              <li>QuickBooks Integration with third party applications</li>
            </ul>
          </Stack>
        </Container>
        <Container>
          <Typography variant="h5"sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
            <p>QuickBooks Enterprise Solutions</p>
          </Typography>
          <Stack 
          alignItems="center" 
          divider={<Divider orientation="vertical" flexItem />} 
          spacing={2} 
          direction="row" 
          useFlexGap flexWrap="wrap"
          justifyContent="center"
          >
           
            <ul>
              <li>Manufacturing, wholesales, contractor, retail, etc.</li>
              <li>Advanced inventory features</li>
              <li>Field service modules</li>
              <li>Integration with other applications</li>
              <li>Server based and cloud based.</li>
            </ul>

            <img id='lookAtPC' src={lookAtPC} alt='' />

          </Stack>
        </Container>
        <Container>
          <Typography variant="h5"sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
            <p>QuickBooks Point Of Sale</p>
          </Typography>
          <Stack 
          alignItems="center" 
          spacing={1} 
          direction="row" 
          useFlexGap flexWrap="wrap"
          justifyContent="center"
          >
           <img id='pointOfSale' src={pointOfSale} alt='' />
            <ul id='pointOfSale'>
              <li>View your business at a glance. Inventory, sales and customer data is at your fingertips.</li>
              <li>Work more efficiently. Adjust prices, discounts and transfer data to QuickBooks accounting with a click. Make your customers happier. Track key information to stay in touch and provide better service.</li>
              <li>88% of QuickBooks Point of Sale users say it helps them know where they are making money and where they are not.</li>
            </ul>
          </Stack>
        </Container>
      </div>
    </>
  );
}

export default QuickBooks;
