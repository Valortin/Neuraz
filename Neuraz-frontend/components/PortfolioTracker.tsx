import { motion } from 'framer-motion';

const PortfolioTracker = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      className="mb-8"
    >
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Portfolio Tracker
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/5 p-4 rounded-xl backdrop-blur-md border border-white/10">
          <p className="text-gray-400">ETH Staked</p>
          <p className="text-2xl font-bold">12.5 ETH</p>
          <p className="text-green-400">+4.2% APY</p>
        </div>
        {/*  */}
      </div>
    </motion.section>
  );
};

export default PortfolioTracker;