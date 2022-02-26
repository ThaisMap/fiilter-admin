import { Box, Modal, Typography } from '@mui/material'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { toggleNewOperationModal } from '../redux/slices/layout'

const NewTransactionModal = () => {
  const open = useAppSelector(state => state.layout.isnewOperationModalOpen)
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const dispatch = useAppDispatch()

  const handleClose = () => {
    dispatch(toggleNewOperationModal())
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Modal closes on click away
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Placeholder text
        </Typography>
      </Box>
    </Modal>
  )
}

export default NewTransactionModal