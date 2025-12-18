"use client";

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useChainId } from 'wagmi';
import { polygon } from 'wagmi/chains';

import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useState } from 'react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Portfolio Value',
      data: [100000, 110000, 105000, 120000, 125000, 130000],
      borderColor: 'rgb(139, 92, 246)',
      backgroundColor: 'rgba(139, 92, 246, 0.1)',
      tension: 0.4,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { position: 'top' as const },
    title: { display: true, text: 'Portfolio Growth' },
  },
};

const tabs = ['Trade', 'Whales', 'Risk', 'Storage', 'AI Chat', 'Portfolio'];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Trade');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
      {/* Header */}
      <header className="w-full p-6 bg-white/5 backdrop-blur-xl shadow-2xl flex justify-between items-center fixed top-0 z-10 border-b border-white/10">
        <h1 className="text-3xl font-black bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Neuraz Dashboard
        </h1>
      </header>

      <div className="flex flex-1 pt-24">
        {/* Sidebar */}
        <motion.aside
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          className="w-64 bg-white/5 backdrop-blur-xl border-r border-white/10 p-6 space-y-3"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.aside>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { label: 'Total Value', value: '$130,000', change: '+30%' },
                { label: 'Win Rate', value: '78%', change: '+5%' },
                { label: 'Open Trades', value: '3', change: 'Live' },
                { label: 'Risk Score', value: 'Low', change: 'Safe' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 p-6 rounded-xl backdrop-blur-md border border-white/10">
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-green-400 text-sm">{stat.change}</p>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="bg-white/5 p-6 rounded-xl backdrop-blur-md border border-white/10">
              <Line data={chartData} options={chartOptions} />
            </div>

            {/* Tab Content */}
            <div className="bg-white/5 p-8 rounded-xl backdrop-blur-md border border-white/10">
              <h2 className="text-2xl font-bold mb-4">{activeTab} Module</h2>
              <p className="text-gray-300">
                {activeTab === 'Trade' && 'Execute spot and futures trades with AI precision.'}
                {activeTab === 'Whales' && 'Track large wallet movements in real-time.'}
                {activeTab === 'Risk' && 'AI-powered risk assessment for every position.'}
                {activeTab === 'Storage' && 'Securely store trade logs on 0G (coming soon).'}
                {activeTab === 'AI Chat' && 'Ask AI for trade ideas and validation.'}
                {activeTab === 'Portfolio' && 'Full asset overview and performance tracking.'}
              </p>
              <button className="mt-6 px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-500 transition">
                Explore {activeTab}
              </button>
            </div>
          </motion.div>
        </main>
      </div>

      {/* Footer */}
      <footer className="w-full p-6 bg-white/5 backdrop-blur-xl text-center border-t border-white/10 mt-auto">
        <p className="text-gray-400">© 2025 Neuraz. All rights reserved.</p>
      </footer>
    </div>
  );
}