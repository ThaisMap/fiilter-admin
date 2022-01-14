import React from 'react';
import { Toolbar, IconButton, Divider, List } from '@mui/material';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems, secondaryListItems } from './listItems';
import { MenuItemProps } from './Menu';

function MenuDrawer({ open, toggleDrawer, drawerWidth }: MenuItemProps) {
  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      width: drawerWidth,
      paddingLeft: theme.spacing(1),
      ...(!open && {
        overflowX: 'hidden',
        width: theme.spacing(9),
      }),
    },
  }));

  return (
    <Drawer variant='permanent' open={open}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}>
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>{mainListItems}</List>
      <Divider />
      <List>{secondaryListItems}</List>
    </Drawer>
  );
}

export default MenuDrawer;
