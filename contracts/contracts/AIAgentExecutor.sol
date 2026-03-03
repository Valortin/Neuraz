// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract AIAgentExecutor is Ownable {
    mapping(address => bool) public approvedAgents;
    mapping(address => uint256) public maxTradeValueUSD;

    event TradeExecuted(address user, uint256 value, bytes data);

    constructor() Ownable(msg.sender) {}

    function setAgentApproval(address agent, bool approved) external onlyOwner {
        approvedAgents[agent] = approved;
    }

    function setUserLimit(address user, uint256 maxUSD) external onlyOwner {
        maxTradeValueUSD[user] = maxUSD;
    }

    // Called by backend agent (with user signature or via account abstraction)
    function executeTrade(address user, bytes calldata callData) external {
        require(approvedAgents[msg.sender], "Not approved agent");
        // In production: verify user signature or use EIP-4337
        (bool success, ) = address(this).call(callData); // e.g. swap on QuickSwap
        require(success, "Trade failed");
        emit TradeExecuted(user, 0, callData); // Add value tracking
    }
}