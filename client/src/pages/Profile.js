import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// import {
//   FormControl,
//   OutlinedInput,
//   Checkbox,
//   InputLabel,
//   Select,
//   ListItemText,
//   MenuItem,
// } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { QUERY_SINGLE_USER } from '../utils/queries';



const ProfileBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: theme.spacing(2),
}));

function Profile() {
  // This will query the available skills from the database
  
  const { userId } = useParams();
  
  const { data: userName } = useQuery(QUERY_SINGLE_USER, {
    variables: { id: userId },
  });


  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };



  const user = userName?.user || userName?.user || {};

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   console.error(error);
  //   return <div>Error loading user data.</div>;
  // }

  const styles = {
    root: {
      flexGrow: 1,
      paddingTop: '18px',
      paddingBottom: '18px',
    },
    avatar: {
      width: '144px',
      height: '144px',
      margin: '16px',
      border: '5px solid white',
    },
    name: {
      fontWeight: 'bold',
      marginBottom: '25px',
    },
    bio: {
      marginBottom: '25px',
    },
    interest: {
      marginBottom: '25px',
    },
    button: {
      position: 'initial',
      margin: '8px',
      backgroundColor: '#4F2683 ',
    },
  };

  return (
    <div style={styles.root}>
      <Stack
        direction={{ sm: 'column', md: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 3 }}
        alignItems={'center'}
      >
        <ProfileBox sx={{ maxWidth: '20rem' }} alignItems={'center'}>
          {user ? (
            <>
              <Avatar style={styles.avatar} sx={{ position: 'initial' }} />
              <Typography variant='h6' style={styles.name}>
                {user.username}
              </Typography>
              <Typography variant='body1' style={styles.bio}>
                {/* {userData.skills} */}
              </Typography>
            </>
          ) : (
            'hit'
          )}
          {!editing ? (
            <Button
              variant='contained'
              color='primary'
              style={styles.button}
              onClick={handleEdit}
            >
              Edit Profile
            </Button>
          ) : (
            <>
             
            </>
          )}
        </ProfileBox>

      </Stack>
    </div>
  );
}

export default Profile;
