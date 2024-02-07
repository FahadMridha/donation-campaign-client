import { Box, Button, Container, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';

//icons
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
import { NItem } from './NavBar';

const Footer = () => {
    const navItems :NItem[] = [
        {
          route: "Home",
          pathname: "/",
        },
        {
          route: "Donation",
          pathname: "/donation",
        },
        {
          route: "Category",
          pathname: "/categories/news?category=all-news",
        },
        {
          route: "Statistics",
          pathname: "/statistics",
        }
      ];
    return (
        <Box className="bg-slate-900 px-2 py-10" >
            <Container>
            <Box  className='w-full text-center'
            sx={{
                "& svg" :{
                    color:"white"
                }
            }}>
            <IconButton>
            <FacebookIcon/>
            </IconButton>
            <IconButton>
            <LinkedInIcon/>
            </IconButton>
            <IconButton>
            <InstagramIcon/>
            </IconButton>
            <IconButton>
            <TwitterIcon/>
            </IconButton>
            <IconButton>
            <YouTubeIcon/>
            </IconButton>
          </Box>
          <Box className='w-full text-center'>
          {navItems.map((item) => (
              <Link key={item.pathname} href={item.pathname}>
              <Button className='text-white'>
                {item.route}
              </Button>
              </Link>
            ))}
          </Box>
          <Typography variant='body2' color='gray' textAlign='center'>
            @2024 Donation Campaign. Design by Fahad Mridha.
          </Typography>
            </Container>
        </Box>
    );
};

export default Footer;