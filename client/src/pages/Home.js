import React from 'react';
import {  Container } from '@mui/material';


import meeting from '../logos/meeting2.jpg'
// import zIndex from '@mui/material/styles/zIndex';
// import handshake from '../logos/handshake.jpg'

function Home() {
  

  return (
    <>
    <div id='homeOne' style={{ 
        height: '550px',
        overflow: "hidden",
        paddingTop: '100px',
        zIndex: '-1'
      }}>
      <img src={meeting} alt='meeting' style={{ 
        width: "100%", 
        overflow: "hidden"
      }}/>
        <Container>
          <p>HiIIIIIIIIIIIIII</p>
        </Container>
    </div>
    <div id='homeTwo'>
        <Container>
        <p>Hi</p>
        </Container>
    </div>
    <div id='homeThree'>
        <Container>
          
        </Container>
    </div>
    </>
  );
}

export default Home;
