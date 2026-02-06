// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract AIParams {
    // From training export (hardcode or oracle-update)
    uint256[] public whaleWeights = [123, 456, 789]; 
    uint256 public riskThresholdLow = 30; // From model

    function getWhaleIntentScore(uint256 txVolume, uint256 walletAge) public pure returns (uint256) {
        // Simple linear approx: score = (weights[0] * txVolume + weights[1] * walletAge) / denom
        return (whaleWeights[0] * txVolume + whaleWeights[1] * walletAge) / 1000;
    }

    
}