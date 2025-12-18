"use client";

import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

const Home = () => {
  const router = useRouter();
  const { isConnected } = useAccount();

  const handleEnterDashboard = () => {
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white flex flex-col">
      <header className="w-full p-6 bg-white/5 backdrop-blur-xl shadow-2xl flex justify-between items-center fixed top-0 z-10 border-b border-white/10">
        <h1 className="text-3xl font-black bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Neuraz</h1>
        <div className="flex items-center gap-6">
          <ConnectButton 
            accountStatus="address"
            chainStatus="icon"
            showBalance={false}
          />
          {isConnected && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEnterDashboard}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-500 hover:to-blue-500 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-purple-500/25"
            >
              Enter Dashboard
            </motion.button>
          )}
        </div>
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
            Welcome to Neuraz
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Your ultimate AI-powered trading assistant for DeFi and SocialFi. Unlock real-time insights, whale intelligence, and a thriving trading community in a decentralized future.
          </p>
          {!isConnected ? (
            <ConnectButton.Custom>
              {({ openConnectModal }) => (
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(139, 92, 246, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openConnectModal}
                  className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-500 hover:to-blue-500 transition-all duration-300 text-xl font-bold shadow-xl"
                >
                  Connect Wallet to Start
                </motion.button>
              )}
            </ConnectButton.Custom>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEnterDashboard}
              className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-500 hover:to-blue-500 transition-all duration-300 text-xl font-bold shadow-xl"
            >
              Start Trading Now
            </motion.button>
          )}
        </motion.section>

        {/* Features & CTA sections remain the same – update buttons similarly if needed */}

        {/* Call to Action */}
        <motion.section className="text-center mb-20">
          <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Ready to Revolutionize Your Trading?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Experience the future of decentralized trading with Neuraz powered by AI and the Polygon chain innovation.
          </p>
          <ConnectButton.Custom>
            {({ account, chain, openConnectModal, mounted }) => (
              mounted && account && chain ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleEnterDashboard}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-500 hover:to-blue-500 transition-all duration-300 text-xl font-bold shadow-xl hover:shadow-purple-500/25"
                >
                  Enter Dashboard
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openConnectModal}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-500 hover:to-blue-500 transition-all duration-300 text-xl font-bold shadow-xl hover:shadow-purple-500/25"
                >
                  Connect Wallet
                </motion.button>
              )
            )}
          </ConnectButton.Custom>
        </motion.section>
      </main>

      <footer className="w-full p-6 bg-white/5 backdrop-blur-xl text-center border-t border-white/10 mt-auto">
        <p className="text-gray-400">© 2025 Neuraz.</p>
      </footer>
    </div>
  );
};

export default Home;