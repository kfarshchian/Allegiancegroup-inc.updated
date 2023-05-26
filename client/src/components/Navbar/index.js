import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import "./navbar.scss"
import { Typography, Button, Menu, MenuItem  } from '@mui/material';
import PageLink from '../PageLink/PageLink';
import AppMenu from '../AppMenu';
import UserMenuButton from '../UserMenuButton';
import { motion } from 'framer-motion';
import { useState } from 'react';

const pageNames = []
const pageLinks = []

const buttonVariants = {
  initial: {
    opacity: 1,
    background: 'rgba(139, 139, 139, 0)',
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
  tap: {
    scale: 0.95,
    opacity: 1,
    background: 'rgba(139, 139, 139, 0.2)',
    transition: {
      duration: 0.1,
    },
  }
}

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className='navbar'>
        {/* This is the logo section */}
        <AppMenu pages={pageNames} pageLinks={pageLinks}/>
        <div className='logo-container'>
          <Link 
            to='/'
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img 
              className='logo'
              src='./logos/agfull.png'
              alt='Logic Lounge logo'
            />
            <Typography 
              sx={{
                fontFamily: 'Franklin Gothic Medium'    
              }} 
              variant='h5'
            >
              
            </Typography> 
          </Link>
        </div>
        {/* This is the page link sections */}
        <div 
          className='page-links'
        >
          <div className='pageLink'>
          <PageLink  component="button" className='pageLink' page={'Home'} pageLink={'/'}/>
          </div>
          <div className='pageLink'>
          <PageLink id='pageLink' page={'QuickBooks'} pageLink={'/quickbooks'}/>
          </div>
          <div className='pageLink'>
          <PageLink id='pageLink' page={'Accounting'} pageLink={'/accounting'}/>
          </div>
          <div className='pageLink'>
          <PageLink id='pageLink' page={'Tax Services'} pageLink={'/taxservices'}/>
          </div>
          <div className='pageLink'>
          <PageLink id='pageLink' page={'Contact Us'} pageLink={'/contact'}/>
          </div>
          <Button sx={{
          fontFamily: 'sans-serif',
          textTransform: 'none',
          fontSize: '1rem',
          color: 'black',
          }}onClick={handleClick}>Menu</Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}><PageLink  page={'QuickBooks Training'} pageLink={`/quickbookstraining`}/></MenuItem>
            <MenuItem onClick={handleClose}><PageLink page={'Other Services'} pageLink={`/services`}/></MenuItem>
            <MenuItem onClick={handleClose}><PageLink page={'Tax Forms'} pageLink={`/taxforms`}/></MenuItem>
            <MenuItem onClick={handleClose}><PageLink page={'Accounting Dictionary'} pageLink={`/accountingdictionary`}/></MenuItem>
          </Menu>
          {
            Auth.loggedIn() && (
              <>
              <div className='pageLink'>
                <PageLink page={'Profile'} pageLink={`/users/${Auth.getProfile().data._id}`}/>
                </div>
              </>
            )
          }
          
        </div>
        {/* This is the user link sections */}
        <div className='user-links'>
          {Auth.loggedIn() ? (
            <>
              <motion.button 
                className='nav-logout'
                variants={buttonVariants}
                initial='initial'
                whileHover='hover'
                whileTap='tap'
                onClick={logout}
              >
                Logout
              </motion.button>
            </>
          ) : (
            <> 
            <div className='pageLink'>
              <PageLink page='Login' pageLink="/login"/>
              </div>
              <div className='pageLink'>
              <PageLink page='Sign Up' pageLink="/signup"/>
              </div>
            </>
          )}
        </div>
        <UserMenuButton logout={logout}/>
      </div>
    </>
  );
};

export default Header;
