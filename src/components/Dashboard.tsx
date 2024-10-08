import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', Users: 4000, Revenue: 2400 },
  { name: 'Feb', Users: 3000, Revenue: 1398 },
  { name: 'Mar', Users: 2000, Revenue: 9800 },
  { name: 'Apr', Users: 2780, Revenue: 3908 },
  { name: 'May', Users: 1890, Revenue: 4800 },
  { name: 'Jun', Users: 2390, Revenue: 3800 },
]

const Dashboard: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className="p-4">
            <Typography variant="h6" gutterBottom>
              User Growth and Revenue
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Users" fill="#8884d8" />
                <Bar dataKey="Revenue" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper className="p-4">
            <Typography variant="h6" gutterBottom>
              Quick Stats
            </Typography>
            <Typography variant="h4">1,234</Typography>
            <Typography color="textSecondary">Total Users</Typography>
            <Typography variant="h4" className="mt-4">$12,345</Typography>
            <Typography color="textSecondary">Total Revenue</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard