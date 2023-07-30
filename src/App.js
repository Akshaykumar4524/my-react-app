import React, { useState } from 'react';
import { Grid } from '@mui/material';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

const App = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const changeState = () => {
    setIsMobileView(!isMobileView)
    setMobileOpen(false)
  }
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  return (
    <Grid container style={{ minHeight: '100vh', background: isMobileView ? 'white' : 'var(--system-background, #F6F8FA)', width: isMobileView ? "375px" : "100%", marginLeft: 'auto', marginRight: 'auto' }}>

      {(!isMobileView || mobileOpen) && <Grid item xs={12} sm={2.5} lg={1.9} xl={1.3} md={2} style={{ backgroundColor: isMobileView ? '' : '#f1f1f1', height: '100%', margin: '0,auto !important' }}>

        <Sidebar isMobileView={isMobileView} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}></Sidebar>
      </Grid>}


      <Grid item xs={12} sm={12} lg={10.1} xl={10.7} md={10} style={{ height: '100%', overflow: 'auto', flexGrow: 1,minWidth:isMobileView?'95%':""}}>

        <MainContent isMobileView={isMobileView} changeState={changeState} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}></MainContent>
      </Grid>
    </Grid>
  );
};

export default App;
