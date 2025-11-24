import { useState } from 'react';
import { motion } from 'framer-motion';

const RiskCalculator = () => {
  const [risk, setRisk] = useState({ entry: '', takeProfit: '', stopLoss: '' });
  const [result, setResult] = useState('');

  const calculateRisk = () => {
    const { entry, takeProfit, stopLoss } = risk;
    if (entry && takeProfit && stopLoss) {
      const riskReward = (Number(takeProfit) - Number(entry)) / (Number(entry) - Number(stopLoss));
      const positionSize = (1000 / (Number(entry) - Number(stopLoss))).toFixed(2);
      setResult(`Risk/Reward: ${riskReward.toFixed(2)} | Position Size: ${positionSize} units`);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
      <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Risk Calculator
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="number"
          placeholder="Entry Price"
          value={risk.entry}
          onChange={(e) => setRisk({ ...risk, entry: e.target.value })}
          className="w-full p-4 bg-white/10 rounded-xl border border-white/20 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300 text-white placeholder-gray-400"
        />
        <input
          type="number"
          placeholder="Take Profit"
          value={risk.takeProfit}
          onChange={(e) => setRisk({ ...risk, takeProfit: e.target.value })}
          className="w-full p-4 bg-white/10 rounded-xl border border-white/20 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300 text-white placeholder-gray-400"
        />
        <input
          type="number"
          placeholder="Stop Loss"
          value={risk.stopLoss}
          onChange={(e) => setRisk({ ...risk, stopLoss: e.target.value })}
          className="w-full p-4 bg-white/10 rounded-xl border border-white/20 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300 text-white placeholder-gray-400"
        />
      </div>
      <motion.button 
        whileHover={{ scale: 1.02 }} 
        onClick={calculateRisk} 
        className="w-full p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 text-xl font-bold shadow-lg"
      >
        Calculate Risk
      </motion.button>
      {result && (
        <motion.p 
          initial={{ scale: 0.9, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          className="text-center p-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl text-white font-bold text-lg"
        >
          {result}
        </motion.p>
      )}
    </motion.div>
  );
};

export default RiskCalculator;