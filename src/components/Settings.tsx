import React from 'react'
import { Typography } from '@mui/material'

const Settings: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Typography variant="body1">
        Configure your application settings here.
      </Typography>
    </div>
  )
}

export default Settings