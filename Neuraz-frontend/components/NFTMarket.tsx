import { motion } from 'framer-motion';

const NFTMarket = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="p-6 bg-white/5 rounded-xl backdrop-blur-md border border-white/10"
  >
    <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
      NFT Marketplace
    </h3>
    <p className="text-gray-300 mt-2">Trade AI-generated trading cards and strategy NFTs.</p>
    <button className="mt-4 px-6 py-2 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg">
      Explore NFTs
    </button>
  </motion.div>
);

export default NFTMarket;