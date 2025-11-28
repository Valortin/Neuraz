"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function WalletConnect() {
  const [address, setAddress] = useState<string | null>(null);

  const connect = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAddress(accounts[0]);
      } catch {
        alert('User rejected request');
      }
    } else {
      alert('Install MetaMask!');
    }
  };

  return (
    <motion.div>
      {address ? (
        <p className="text-green-400">
          Connected: {address.slice(0, 6)}...{address.slice(-4)}
        </p>
      ) : (
        <button
          onClick={connect}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
        >
          Connect Wallet
        </button>
      )}
    </motion.div>
  );
}