import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import BalanceIcon from '@mui/icons-material/Balance';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Link from 'next/link';

interface itemProps {
  linkTo?: string;
  icon?: React.ReactElement;
  text: string;
}

const Item = ({ linkTo = '/', icon, text }: itemProps) => {
  return (
    <div>
      <Link href={linkTo} passHref>
        <ListItem button>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      </Link>
    </div>
  );
};

export const mainListItems = (
  <div>
    <Item linkTo='/' icon={<DashboardIcon />} text='Dashboard' />
    <Item
      linkTo='/carteira'
      icon={<AccountBalanceWalletIcon />}
      text='Carteira'
    />
    <Item linkTo='/operacoes' icon={<ShoppingCartIcon />} text='Operações' />
    <Item linkTo='/' icon={<PriceCheckIcon />} text='Dividendos' />
    <Item linkTo='/' icon={<BalanceIcon />} text='Rebalanceamento' />
    <Item linkTo='/' icon={<FilterAltIcon />} text='Fiilter' />
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Ações</ListSubheader>
    <Item linkTo='#' icon={<AddBusinessIcon />} text='Incluir transação' />
  </div>
);
