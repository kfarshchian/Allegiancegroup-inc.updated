import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import {
  Button,
  TextField,
  FormControl,
  Typography,
  Box,
} from '@mui/material';
import Auth from '../utils/auth';
// import { UserImage } from '../components/ImageUpload/UserImage';
// import {UploadWidget} from '../components/ImageUpload/UploadWidget'

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Add a user to database
  const [addUser, { error, data }] = useMutation(ADD_USER);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };


  return (
    <>
      <Box
        id='mainBody'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant='h6'>Sign Up</Typography>
        <div>
          {data ? (
            <p>
              Success! You may now head{' '}
              <Link to='/'>back to the homepage.</Link>
            </p>
          ) : (
            <FormControl
            onSubmit={handleFormSubmit}
            sx={{
              border: 2,
              borderColor: 'black',
              width: '20rem',
              padding: 5,
              borderRadius: 11,
              boxShadow: '3',
              margin: 5
            }}
            >
                {/* <UserImage/> */}
                {/* <UploadWidget/> */}
              <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <TextField
                  required
                  margin='normal'
                  variant='outlined'
                  label='Username'
                  name='username'
                  fullWidth
                  onChange={handleChange}
                  value={formState.name}
                />
                <TextField
                fullWidth
                  margin='normal'
                  variant='outlined'
                  required
                  label='Email'
                  name='email'
                  onChange={handleChange}
                  value={formState.email}
                />
                <TextField
                  margin='normal'
                  variant='outlined'
                  fullWidth
                  required
                  label='Password'
                  name='password'
                  type='password'
                  onChange={handleChange}
                  value={formState.password}
                />
                
                <Button
                  id='logButtons'
                  color='secondary'
                  sx={{ cursor: 'pointer', color: 'black' }}
                  type='submit'
                  variant='outlined'
                >
                  Submit
                </Button>
              </form>
            </FormControl>
          )}
          {error && (
            <div className='my-3 p-3 bg-danger text-white'>{error.message}</div>
          )}
        </div>
      </Box>
    </>
  );
};

export default Signup;
