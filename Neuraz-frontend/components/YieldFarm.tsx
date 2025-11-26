import { motion } from 'framer-motion';

const YieldFarm = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      className="mb-8"
    >
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Yield Farm Simulator
      </h2>
      <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl">
        Start Farming (Est. 15% APY)
      </button>
    </motion.section>
  );
};

export default YieldFarm;