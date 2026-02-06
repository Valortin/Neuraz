import json
import requests  

# Load model output
with open('model_output.json', 'r') as f:
    data = json.load(f)


def send_to_contract(risk_data):
    
    endpoint = 'http://localhost:3000/linera/oracle'  
    response = requests.post(endpoint, json={'action': 'update_risk', 'data': risk_data})
    print(f'Contract Response: {response.text}')

send_to_contract(data)