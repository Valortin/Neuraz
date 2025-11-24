import { motion } from 'framer-motion';

const SocialFeed = () => {
  const posts = [
    { user: 'TraderX', content: 'Bullish on ETH! Entry at $3,000. #DeFi', likes: 15 },
    { user: 'CryptoY', content: 'Validated BTC trade, 2:1 R/R. Great tools here! #SocialFi', likes: 8 },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Social Feed
      </h3>
      <ul className="space-y-3">
        {posts.map((post, index) => (
          <motion.li 
            key={index} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="p-4 bg-white/5 rounded-xl backdrop-blur-md border border-white/10"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="font-bold text-purple-300">{post.user}</span>
              <motion.button whileTap={{ scale: 1.2 }} className="text-blue-400 hover:text-blue-300">
                ❤️ {post.likes}
              </motion.button>
            </div>
            <p className="text-gray-300">{post.content}</p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default SocialFeed;