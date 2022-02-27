import React from "react"
import { Toolbar, IconButton, Divider } from "@mui/material"
import { styled } from "@mui/material/styles"
import MuiDrawer from "@mui/material/Drawer"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import { MainList, SecondaryList } from "./MenuLists"
import { MenuItemProps } from "./Menu"
import theme from "../../theme"

function MenuDrawer({ open, toggleDrawer, drawerWidth }: MenuItemProps) {
  const Drawer = styled(MuiDrawer)(() => ({
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      paddingLeft: theme.spacing(1),
      ...(!open && {
        overflowX: "hidden",
        width: theme.spacing(9)
      })
    }
  }))

  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1]
        }}>
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <MainList />
      <Divider />
      <SecondaryList />
    </Drawer>
  )
}

export default MenuDrawer
