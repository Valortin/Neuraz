"use client";

import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const Home = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white flex flex-col">
      <header className="w-full p-6 bg-white/5 backdrop-blur-xl shadow-2xl flex justify-between items-center fixed top-0 z-10 border-b border-white/10">
        <h1 className="text-3xl font-black bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">VAAD AI-0G</h1>
        <nav>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/dashboard')}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-500 hover:to-blue-500 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-purple-500/25"
          >
            Enter Dashboard
          </motion.button>
        </nav>
      </header>

      <main className="flex-grow pt-24 pb-12 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h1 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-6xl md:text-7xl font-black bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent mb-6"
          >
            Welcome to VAAD AI-0G
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Your ultimate AI-powered trading assistant for DeFi and SocialFi. Unlock real-time insights, whale intelligence, and a thriving trading community in a decentralized future.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(139, 92, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/dashboard')}
            className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-500 hover:to-blue-500 transition-all duration-300 text-xl font-bold shadow-xl"
          >
            Start Trading Now
          </motion.button>
        </motion.section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { title: 'Real-Time Insights', desc: 'Access live market data for spot and futures trading with precision.', icon: '📊' },
            { title: 'Whale Intelligence', desc: 'Track and analyze major market movers with AI-driven tools.', icon: '🐋' },
            { title: 'SocialFi Community', desc: 'Join a network to share strategies and validate trades.', icon: '👥' }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/5 p-8 rounded-2xl shadow-2xl hover:shadow-purple-500/20 backdrop-blur-md border border-white/10 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-purple-300 mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* Call to Action */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Ready to Revolutionize Your Trading?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Experience the future of decentralized trading with VAAD AI-0G—powered by AI and blockchain innovation.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/dashboard')}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-500 hover:to-blue-500 transition-all duration-300 text-xl font-bold shadow-xl hover:shadow-purple-500/25"
          >
            Get Started
          </motion.button>
        </motion.section>
      </main>

      <footer className="w-full p-6 bg-white/5 backdrop-blur-xl text-center border-t border-white/10 mt-auto">
        <p className="text-gray-400">
          &copy; 2025 VAAD AI-0G.
        </p>
      </footer>
    </div>
  );
};

export default Home;