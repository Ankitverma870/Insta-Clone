import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import MessagesIcon from '@mui/icons-material/Message';
import NotificationIcon from '@mui/icons-material/Notifications';
import CreateIcon from '@mui/icons-material/Create';
import ProfileIcon from '@mui/icons-material/AccountCircle';
import ReelsIcon from '@mui/icons-material/Movie';
const drawerWidth = 220;
const iconMap = {
  'Home': <HomeIcon />,
  'Search': <SearchIcon />,
  'Explore': <ExploreIcon />,
  'Reels': <ReelsIcon />,
  'Messages': <MessagesIcon />,
  'Notification': <NotificationIcon />,
  'Create': <CreateIcon />,
  'Profile': <ProfileIcon />,
};

export default function Sidebar () {
  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            // bgcolor: 'black',
        
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Box sx={{display:'flex',justifyContent:'center'}}>
        <Typography variant="h4" noWrap component="div">
            Instagram
          </Typography>
        </Box>
        <List>
      {['Home', 'Search', 'Explore', 'Reels', 'Messages', 'Notification', 'Create', 'Profile'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {iconMap[text]}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
        
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 5 }}
      >
        <Toolbar />
       
       
      </Box>
    </Box>
  );
}
