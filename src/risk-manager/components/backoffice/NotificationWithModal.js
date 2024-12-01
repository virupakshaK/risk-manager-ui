import React, { useState } from 'react';
import { Badge, IconButton, Modal, Tooltip, Typography, Box } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

const NotificationWithModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Tooltip title="notification">
        <IconButton
          sx={{ color: 'primary', mr:30 }}
          onClick={handleOpen} // Open modal on click
        >
          <Badge badgeContent={4} color="secondary">
            <MailIcon fontSize="small" color="primary" />
          </Badge>
        </IconButton>
      </Tooltip>

      {/* Modal Component */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Notifications
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            You have 4 new notifications.
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default NotificationWithModal;
