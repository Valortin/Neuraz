require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      viaIR: true,                    
      evmVersion: "paris",
      metadata: {
        bytecodeHash: "none",         
      },
    },
  },

  networks: {
    // Polygon Amoy Testnet (current Polygon testnet as of 2025)
    polygon_amoy: {
      url: process.env.POLYGON_AMOY_RPC_URL || "https://rpc-amoy.polygon.technology",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      chainId: 80002,
      gasPrice: 40_000_000_000, // 40 gwei – usually stable on Amoy right now
      timeout: 120000,
    },

    // Polygon Mainnet
    polygon: {
      url: process.env.POLYGON_MAINNET_RPC_URL || "https://polygon-rpc.com",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      chainId: 137,
      gasPrice: "auto", // let Hardhat estimate (or you can set a fixed value if you prefer)
      timeout: 300000,
    },

    // Keep your old 0G networks if you still need them
    og_galileo: {
      chainId: 16602,
      url: process.env.OG_RPC_URL || "https://evmrpc-testnet.0g.ai",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      gasPrice: 3_000_000_000,
    },
    og_mainnet: {
      chainId: 16661,
      url: process.env.OG_MAINNET_RPC_URL || "https://evmrpc.0g.ai",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      gasPrice: 3_000_000_000,
    },
  },

  etherscan: {
    apiKey: {
      polygonAmoy: process.env.POLYGONSCAN_API_KEY || "",
      polygon: process.env.POLYGONSCAN_API_KEY || "",
      // Keep old ones if you still verify on 0G
      // og_mainnet: process.env.ETHERSCAN_API_KEY || "",
    },
    customChains: [
      {
        network: "polygonAmoy",
        chainId: 80002,
        urls: {
          apiURL: "https://api-amoy.polygonscan.com/api",
          browserURL: "https://amoy.polygonscan.com",
        },
      },
      {
        network: "polygon",
        chainId: 137,
        urls: {
          apiURL: "https://api.polygonscan.com/api",
          browserURL: "https://polygonscan.com",
        },
      },
    ],
  },

  // Optional but nice to have
  gasReporter: {
    enabled: process.env.REPORT_GAS === "true",
    currency: "USD",
  },

  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};