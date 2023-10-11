import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Header } from 'antd/es/layout/layout';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {Routes, Route,Link} from 'react-router-dom';
import { Grid } from '@mui/material';
import './styleforheader.css';
{/*import Form from './Form';
import Home from "./Home"*/}
function HeaderBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        {/*   <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            About
          </Typography> */}
          {/*<Button color="inherit">Login</Button>
    <button color="inherit">      
    <Link to='/'>HomeOutlinedIcon  </Link>
    </button>
    <button>
    <Link to='/form'>Form</Link>
    </button>
      
    
        </Toolbar>
        </AppBar>
        <Routes>
      <Route path='/form' element={<Form/>}/>
      <Route path='/' element={<Home/>}/>
        </Routes>*/}


      </Toolbar>
        </AppBar>
        <Grid>
          <div className='a'>
            <img width="40%" src="https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-12-29/9952f320-49c4-11eb-8e93-835c7725694d.jpg"/>
            <div className='midd'>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <center> 
              <p><u> Full stack Developer</u></p>
              </center>
              </Typography>
              <p align="left">Full-stack developers design and create websites and applications for various platforms. A full-stack developer’s job description might include the following:Collaborate with other departments on projects and sprintsFront-end development is the process of creating the interface of a website. It entails coding details like drop-down menus, fonts, colors, and page layouts. Full-stack developers should also know how to work with front-end technologies like HTML, CSS, and scripting languages such as JavaScript to make websites and applications visually viable and appealing. If you want to transition into full-stack development
              Front-end development is the process of creating the interface of a website. It entails coding details like drop-down menus, fonts, colors, and page layouts. Full-stack developers should also know how to work with front-end technologies like HTML, CSS, and scripting languages such as JavaScript to make websites and applications visually viable and appealing. If you want to transition into full-stack development</p>
            </div>
          </div>
          
          
        </Grid>
        <Grid>
        <div className='a'>
        <img width="40%" src="https://cdn.educba.com/academy/wp-content/uploads/2019/09/What-is-Front-End-Developer.png"/>
        <div className='midd'>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <center>
           <p><u>Frontend Developer</u> </p>
           </center>
          </Typography>
          <div>
          <p align="left" >A front-end developer is a type of software developer who specializes in creating and designing the user interface (UI) and user experience (UX) of websites and web applications. The primary responsibility of a front-end developer is to ensure that the visual and interactive aspects of a website or application are user-friendly, aesthetically pleasing, and functionally efficient.

Front-end developers work with various technologies, tools, and languages, including:

HTML (HyperText Markup Language): The standard markup language used to create the structure and layout of web pages.
CSS (Cascading Style Sheets): A stylesheet language used to control the presentation, formatting, and appearance of web pages, such as colors, fonts, and layout.
JavaScript: A programming language that allows developers to add interactivity, animations, and other dynamic elements to websites and web applications.</p>
</div>
          </div>
          </div>

        </Grid>

        <Grid>
        <div className='a'>
          <img width="40%" src="https://thetapacademy.com/wp-content/uploads/2023/03/back-end-developer-skills-required-1024x768.png"/>
          <div className='middd'>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <center><u>Backend Developer</u></center> 
          </Typography>
          <p align="left">The server-side components of software systems including web apps, mobile applications, and APIs are the responsibility of backend developers, who are also in charge of designing, developing, and maintaining them. They provide scalable, dependable, and effective software solutions using programming languages like Python, Java, or Node.js and database technologies like SQL and NoSQL databases.

They may be responsible for activities like building APIs, managing and scaling databases, developing microservices, designing server-less architectures, and guaranteeing the performance and security of the application’s server-side components. Success in this position requires excellent problem-solving abilities, thoroughness, and a solid grasp of software architecture and design patterns.</p>
          </div>
          </div>
        </Grid>

    </Box>

  );
}

export default  HeaderBar;