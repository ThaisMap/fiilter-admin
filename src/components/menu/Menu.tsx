import React from 'react';
import MenuAppBar from './MenuAppBar';
import MenuDrawer from './MenuDrawer';

export interface MenuItemProps {
  toggleDrawer: () => void;
  open: boolean;
  drawerWidth: number;
}
function Menu() {
  const drawerWidth: number = 240;

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <MenuAppBar
        open={open}
        drawerWidth={drawerWidth}
        toggleDrawer={toggleDrawer}
      />
      <MenuDrawer
        open={open}
        drawerWidth={drawerWidth}
        toggleDrawer={toggleDrawer}
      />
    </>
  );
}

export default Menu;
