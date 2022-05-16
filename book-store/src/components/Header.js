import React, { useState } from 'react';
import {AppBar,Tab, Tabs, Toolbar, Typography} from '@material-ui/core';
import './Header.css'
import MenuBook from '@material-ui/icons/MenuBook';
import { NavLink } from 'react-router-dom';
const Header = () => {
    const [value, setValue] = useState();
  return (
    <div>
       <AppBar position ='sticky'>
        <Toolbar className = "Toolbar">
          <NavLink to="/" style={{color: "white"}}>
          <Typography><MenuBook /> </Typography>
           </NavLink>
           <Tabs className = 'tabs'
           textColor="inherit" 
           indicatorColor= "secondary" 
           value={value}
           onChange={(e,val) => setValue(val)}>
               <Tab Link href= "/add" label="Add Article" />
               <Tab Link href= "/books" label= "News" />
               <Tab Link href ="/about" label= "Ema's NewsPaper" />
           </Tabs>
        </Toolbar>
       </AppBar>
    </div>
  );    
};

export default Header;