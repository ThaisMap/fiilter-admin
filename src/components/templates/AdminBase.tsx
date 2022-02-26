import React from 'react';
import { Box } from '@mui/material';
import Menu from '../menu/Menu';
import NewTransactionModal from '../NewTransactionModal';

const AdminBase: React.FC = ({ children }) => {
  return (
    <Box sx={{ flex: 1 }}>
      <Menu />
      <Box
        sx={{
          flex: 1,
          pt: 8,
          ml: 8,
          height: '100vh',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
        }}>
        {children}
      </Box>
      <NewTransactionModal />
    </Box>
  );
};

export default AdminBase;
