import React from 'react'
import Link from 'next/link'
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import NotificationsIcon from '@mui/icons-material/Notifications'

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap className="flex-grow">
          <Link href="/" className="text-indigo-600 font-bold">
            SaaSApp
          </Link>
        </Typography>
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
        <IconButton color="inherit">
          <Link href="/settings">
            <SettingsIcon />
          </Link>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar