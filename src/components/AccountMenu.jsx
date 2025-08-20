import { useState } from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  Tooltip,
} from "@mui/material";
import {
  AccountCircle,
  Settings,
  Logout,
  PersonAdd,
} from "@mui/icons-material";

function AccountMenu({ onLogout, onProfile, onSettings }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Tooltip title="Account">
        <IconButton
          onClick={handleOpen}
          size="large"
          color="inherit"
          sx={{ ml: 1 }}
        >
          <AccountCircle color="primary" sx={{ fontSize: 45 }} />
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 3,
          sx: { mt: 1.5, minWidth: 220 },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={onProfile ?? (() => {})}>
          <ListItemIcon>
            <AccountCircle fontSize="small" />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem onClick={onSettings ?? (() => {})}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Setting
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add Account
        </MenuItem>
        <Divider />
        <MenuItem onClick={onLogout ?? (() => {})}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}

export default AccountMenu;
