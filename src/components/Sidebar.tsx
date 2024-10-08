import React from 'react'
import Link from 'next/link'
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import BarChartIcon from '@mui/icons-material/BarChart'
import PeopleIcon from '@mui/icons-material/People'
import SettingsIcon from '@mui/icons-material/Settings'

const Sidebar: React.FC = () => {
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: 'w-64 bg-indigo-700 text-white',
      }}
    >
      <List>
        <ListItem button component={Link} href="/">
          <ListItemIcon>
            <HomeIcon className="text-white" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} href="/analytics">
          <ListItemIcon>
            <BarChartIcon className="text-white" />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItem>
        <ListItem button component={Link} href="/users">
          <ListItemIcon>
            <PeopleIcon className="text-white" />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button component={Link} href="/settings">
          <ListItemIcon>
            <SettingsIcon className="text-white" />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default Sidebar