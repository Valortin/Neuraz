import { motion } from 'framer-motion';

const WhaleTracker = () => {
  const whales = [
    { tier: 'Mega Whale', impact: 'High', activity: '$10M moved to Uniswap', color: 'from-purple-600' },
    { tier: 'Whale', impact: 'Medium', activity: '$2M ETH transfer', color: 'from-blue-600' },
    { tier: 'Dolphin', impact: 'Low', activity: '$500K BTC buy', color: 'from-emerald-600' },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Whale Activity
      </h3>
      <ul className="space-y-3">
        {whales.map((whale, index) => (
          <motion.li 
            key={index} 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: index * 0.1 }}
            className="p-4 bg-white/5 rounded-xl backdrop-blur-md border border-white/10 hover:border-purple-400/50 transition-all duration-300"
          >
            <div className="flex justify-between items-center">
              <span className="font-bold text-purple-300">{whale.tier}</span>
              <span className={`px-2 py-1 rounded-full text-xs bg-gradient-to-r ${whale.color} to-transparent text-white`}>{whale.impact}</span>
            </div>
            <p className="text-gray-400 mt-2">{whale.activity}</p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default WhaleTracker;