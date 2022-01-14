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

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary='Dashboard' />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AccountBalanceWalletIcon />
      </ListItemIcon>
      <ListItemText primary='Carteira' />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PriceCheckIcon />
      </ListItemIcon>
      <ListItemText primary='Dividendos' />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BalanceIcon />
      </ListItemIcon>
      <ListItemText primary='Rebalanceamento' />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FilterAltIcon />
      </ListItemIcon>
      <ListItemText primary='Fiilter' />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Ações</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AddBusinessIcon />
      </ListItemIcon>
      <ListItemText primary='Incluir transação' />
    </ListItem>
  </div>
);
