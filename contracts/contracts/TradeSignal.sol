// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract TradeSignal {
    struct Signal {
        address trader;
        string symbol;
        string action; // "buy" or "sell"
        uint256 price;
        uint256 timestamp;
    }

    mapping(address => Signal[]) public traderSignals;
    uint256 public totalSignals;

    event SignalSubmitted(address indexed trader, string symbol, string action, uint256 price, uint256 timestamp);

    // Submit a new trade signal
    function submitSignal(string memory symbol, string memory action, uint256 price) external {
        require(bytes(symbol).length > 0, "Symbol cannot be empty");
        require(bytes(action).length > 0, "Action cannot be empty");
        require(price > 0, "Price must be positive");

        Signal memory newSignal = Signal(msg.sender, symbol, action, price, block.timestamp);
        traderSignals[msg.sender].push(newSignal);
        totalSignals++;

        emit SignalSubmitted(msg.sender, symbol, action, price, block.timestamp);
    }

    // Get all signals for a trader
    function getSignals(address trader) external view returns (Signal[] memory) {
        return traderSignals[trader];
    }

    // Get total signals count
    function getTotalSignals() external view returns (uint256) {
        return totalSignals;
    }
}