import React from "react"
import { Toolbar, IconButton, Typography } from "@mui/material"
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar"
import { styled } from "@mui/material/styles"
import MenuIcon from "@mui/icons-material/Menu"
import { MenuItemProps } from "./Menu"
import theme from "../../theme"
import { APP_NAME } from "../../utils/constants"

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

function MenuAppBar({ open, toggleDrawer, drawerWidth }: MenuItemProps) {
  const AppBar = styled(MuiAppBar)<AppBarProps>(() => ({
    zIndex: theme.zIndex.drawer + 1,
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`
    })
  }))

  return (
    <AppBar position="absolute" open={open}>
      <Toolbar
        sx={{
          pr: theme.spacing(3)
        }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: theme.spacing(5),
            ...(open && { display: "none" })
          }}>
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" noWrap sx={{ flexGrow: 1 }}>
          {APP_NAME}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default MenuAppBar
