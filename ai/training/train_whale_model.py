import torch
import torch.nn as nn
import torch.optim as optim
import numpy as np
import json


data = np.random.rand(1000, 3)  
labels = np.random.rand(1000, 1)  

class WhalePredictor(nn.Module):
    def __init__(self):
        super().__init__()
        self.fc1 = nn.Linear(3, 64)
        self.fc2 = nn.Linear(64, 32)
        self.fc3 = nn.Linear(32, 1)
        self.relu = nn.ReLU()
        self.sigmoid = nn.Sigmoid()

    def forward(self, x):
        x = self.relu(self.fc1(x))
        x = self.relu(self.fc2(x))
        return self.sigmoid(self.fc3(x))

# Train
model = WhalePredictor()
criterion = nn.MSELoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

X = torch.tensor(data, dtype=torch.float32)
y = torch.tensor(labels, dtype=torch.float32)

for epoch in range(100):
    optimizer.zero_grad()
    output = model(X)
    loss = criterion(output, y)
    loss.backward()
    optimizer.step()
    if epoch % 10 == 0:
        print(f"Epoch {epoch}, Loss: {loss.item()}")

# Save model
torch.save(model.state_dict(), 'whale_model.pth')

# Export params for on-chain (simplified weights)
weights = {
    "fc1_weight": model.fc1.weight.data.tolist()[0][:3],  # Sample
    "fc3_bias": model.fc3.bias.data.tolist()
}
with open('../onchain/whale_params.json', 'w') as f:
    json.dump(weights, f)

print("Training complete. Model saved.")