import { motion } from 'framer-motion';

const AIChat = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      className="mb-8"
    >
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        AI Strategy Advisor
      </h2>
      <input placeholder="Ask AI: Best ETH trade?" className="w-full p-4 bg-white/10 rounded-xl" />
      <p className="mt-4 text-gray-300">
        AI: {"\""}Bullish on ETH—stake for 5% yield.{"\""}
      </p>
    </motion.section>
  );
};

export default AIChat;