import * as React from "react"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import ListSubheader from "@mui/material/ListSubheader"

import DashboardIcon from "@mui/icons-material/Dashboard"
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet"
import PriceCheckIcon from "@mui/icons-material/PriceCheck"
import BalanceIcon from "@mui/icons-material/Balance"
import FilterAltIcon from "@mui/icons-material/FilterAlt"
import AddBusinessIcon from "@mui/icons-material/AddBusiness"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import LogoutIcon from '@mui/icons-material/Logout';
import Link from "next/link"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { toggleNewOperationModal } from "../../redux/slices/layout"
import { List } from "@mui/material"

interface ItemProps {
  linkTo?: string
  icon?: React.ReactElement
  text: string
  onClick?: () => void
}

const Item = ({ linkTo = "/", icon, text, onClick }: ItemProps) => {
  return (
    <div>
      <Link href={linkTo} passHref>
        <ListItem button onClick={onClick}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      </Link>
    </div>
  )
}

export const MainList = () => (
  <List>
    <Item linkTo="/" icon={<DashboardIcon />} text="Dashboard" />
    <Item
      linkTo="/wallet"
      icon={<AccountBalanceWalletIcon />}
      text="Carteira"
    />
    <Item linkTo="/operations" icon={<ShoppingCartIcon />} text="Operações" />
    <Item linkTo="/" icon={<PriceCheckIcon />} text="Dividendos" />
    <Item linkTo="/" icon={<BalanceIcon />} text="Rebalanceamento" />
    <Item linkTo="/" icon={<FilterAltIcon />} text="Fiilter" />
  </List>
)

export const SecondaryList = () => {
  const dispatch = useAppDispatch()
  const logoutUrl = useAppSelector(state => { return state.auth.logoutURL })
  const handleNewTransactionClick = () => {
    dispatch(toggleNewOperationModal())
  }
  return (
    <List>
      <ListSubheader inset>Ações</ListSubheader>
      <Item
        linkTo="#"
        icon={<AddBusinessIcon />}
        text="Incluir transação"
        onClick={handleNewTransactionClick}
      />
      <Item
        linkTo={logoutUrl}
        icon={<LogoutIcon />}
        text="Logout"
      />
    </List>
  )
}
