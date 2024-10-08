import React from 'react'
import { Typography } from '@mui/material'

const UserManagement: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        User Management
      </Typography>
      <Typography variant="body1">
        Here you can manage your users and their permissions.
      </Typography>
    </div>
  )
}

export default UserManagement