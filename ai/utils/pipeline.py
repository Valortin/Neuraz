from models.risk_scoring_model import RiskScoringModel

class AIPipeline:
    def __init__(self):
        self.stages = []  

    def add_stage(self, model):
        self.stages.append(model)

    def forward(self, x):
        for stage in self.stages:
            x = stage(x)
        return x


pipeline = AIPipeline()
risk_model = RiskScoringModel()
pipeline.add_stage(risk_model)  

sample_input = torch.tensor([[1.1, 15000, 0.7]])
output = pipeline.forward(sample_input)
print(f'Pipeline Output: {output.item()}')