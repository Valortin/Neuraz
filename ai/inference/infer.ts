import * as tf from '@tensorflow/tfjs-node';
import fs from 'fs/promises';
import path from 'path';

// Load model from JSON (convert PyTorch to TF.js or use ONNX later)
async function loadModel(modelId: string) {
  // For now, mock load; in real, use tf.loadLayersModel()
  const modelPath = path.join(__dirname, '../training/whale_model.json'); // Export from Python
  // Assume converted model
  return tf.sequential(); // Placeholder
}

export async function inferWhaleIntent(features: number[]): Promise<number> {
  const model = await loadModel('whale_predictor');
  const input = tf.tensor2d([features]);
  const output = model.predict(input) as tf.Tensor;
  const score = (await output.data())[0];
  return score; // Intent score 0-1
}

// Similar for risk scorer
// Export to backend: import { inferWhaleIntent } from '../../ai/inference/infer';