import torch
import torch.nn as nn
import torch.optim as optim
import pandas as pd
from models.risk_scoring_model import RiskScoringModel 


data = pd.read_csv('../data/sample_defi_data.csv')
features = data[['price', 'volume', 'whale_score']].values
labels = data['risk_label'].values


X = torch.tensor(features, dtype=torch.float32)
y = torch.tensor(labels, dtype=torch.float32).unsqueeze(1)


model = RiskScoringModel()
criterion = nn.BCELoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

for epoch in range(100):
    optimizer.zero_grad()
    outputs = model(X)
    loss = criterion(outputs, y)
    loss.backward()
    optimizer.step()
    if epoch % 10 == 0:
        print(f'Epoch {epoch}, Loss: {loss.item()}')


torch.save(model.state_dict(), '../models/risk_scoring_model.pth')


sample_input = torch.tensor([[1.1, 15000, 0.7]])
risk_score = model(sample_input).item()
print(f'Predicted Risk Score: {risk_score}')


import json
with open('../integration/model_output.json', 'w') as f:
    json.dump({'risk_score': risk_score}, f)