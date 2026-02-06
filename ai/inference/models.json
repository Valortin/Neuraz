{
  "models": [
    {
      "name": "risk_scoring_model",
      "type": "neural_network",
      "framework": "pytorch",
      "description": "Predicts risk score for DeFi trades based on volume, price, and whale activity.",
      "input_features": ["price", "volume", "whale_score"],
      "output": "risk_score (0-1)",
      "trained_on": "sample_defi_data.csv",
      "architecture": {
        "layers": [
          {"type": "Linear", "in_features": 3, "out_features": 64},
          {"type": "ReLU"},
          {"type": "Linear", "in_features": 64, "out_features": 1},
          {"type": "Sigmoid"}
        ]
      },
      "path": "../models/risk_scoring_model.pth",
      "composable": true 
    },
   
    {
      "name": "trade_signal_model",
      "type": "placeholder",
      "description": "Future model for generating buy/sell signals.",
      "architecture": {}  
    }
  ]
}