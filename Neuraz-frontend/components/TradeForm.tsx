import { useState } from 'react';
import { motion } from 'framer-motion';

const TradeForm = () => {
  const [form, setForm] = useState({ type: 'spot' as 'spot' | 'futures', asset: 'BTC', amount: '', entry: '', takeProfit: '', stopLoss: '' });
  const [validation, setValidation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { entry, takeProfit, stopLoss } = form;
    if (!entry || !takeProfit || !stopLoss) return;
    const riskReward = (Number(takeProfit) - Number(entry)) / (Number(entry) - Number(stopLoss));
    setValidation(`Trade Validated! Risk/Reward Ratio: ${riskReward.toFixed(2)}`);
  };

  return (
    <motion.form onSubmit={handleSubmit} className="space-y-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value as 'spot' | 'futures' })}
          className="w-full p-4 bg-white/10 rounded-xl border border-white/20 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300 text-white placeholder-gray-400"
        >
          <option value="spot">Spot Trading</option>
          <option value="futures">Futures Trading</option>
        </select>
        <input
          type="text"
          placeholder="Asset (e.g., BTC)"
          value={form.asset}
          onChange={(e) => setForm({ ...form, asset: e.target.value })}
          className="w-full p-4 bg-white/10 rounded-xl border border-white/20 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300 text-white placeholder-gray-400"
        />
        <input
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          className="w-full p-4 bg-white/10 rounded-xl border border-white/20 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300 text-white placeholder-gray-400"
        />
        <input
          type="number"
          placeholder="Entry Price"
          value={form.entry}
          onChange={(e) => setForm({ ...form, entry: e.target.value })}
          className="w-full p-4 bg-white/10 rounded-xl border border-white/20 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300 text-white placeholder-gray-400"
        />
        <input
          type="number"
          placeholder="Take Profit"
          value={form.takeProfit}
          onChange={(e) => setForm({ ...form, takeProfit: e.target.value })}
          className="w-full p-4 bg-white/10 rounded-xl border border-white/20 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300 text-white placeholder-gray-400"
        />
        <input
          type="number"
          placeholder="Stop Loss"
          value={form.stopLoss}
          onChange={(e) => setForm({ ...form, stopLoss: e.target.value })}
          className="w-full p-4 bg-white/10 rounded-xl border border-white/20 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300 text-white placeholder-gray-400"
        />
      </div>
      <motion.button 
        type="submit" 
        whileHover={{ scale: 1.02 }} 
        className="w-full p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 text-xl font-bold shadow-lg hover:shadow-purple-500/25"
      >
        Validate Trade
      </motion.button>
      {validation && (
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="text-green-400 text-center font-semibold p-4 bg-green-900/20 rounded-xl border border-green-400/30"
        >
          {validation}
        </motion.p>
      )}
    </motion.form>
  );
};

export default TradeForm;