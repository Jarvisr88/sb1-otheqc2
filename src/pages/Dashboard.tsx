import React from 'react'
import { Layers, Users, DollarSign, TrendingUp } from 'lucide-react'

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard icon={<Layers />} title="Total Projects" value="12" />
        <DashboardCard icon={<Users />} title="Total Users" value="1,234" />
        <DashboardCard icon={<DollarSign />} title="Revenue" value="$12,345" />
        <DashboardCard icon={<TrendingUp />} title="Growth" value="24%" />
      </div>
    </div>
  )
}

const DashboardCard = ({ icon, title, value }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="text-indigo-500">{icon}</div>
        <span className="text-gray-500 text-sm">{title}</span>
      </div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  )
}

export default Dashboard