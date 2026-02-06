import { Router } from 'express';
import { Request, Response } from 'express';
import { inferWhaleIntent } from '../../ai/inference/infer'; 
import { getWhaleTransactions } from '../services/whale.service'; 
import { authMiddleware } from '../middleware/auth'; 

const router = Router();

/**
 * @route   GET /api/whales/recent
 * @desc    Get recent whale transactions on Polygon
 * @access  Public (or protected with auth)
 */
router.get('/recent', async (req: Request, res: Response) => {
  try {
    const limit = Number(req.query.limit) || 20;
    const minValue = Number(req.query.minValue) || 10000; // in USD

    const whales = await getWhaleTransactions({
      chain: 'polygon',
      limit,
      minValue,
    });

    return res.status(200).json({
      success: true,
      data: whales,
      count: whales.length,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error fetching recent whales:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to fetch whale transactions',
    });
  }
});

/**
 * @route   POST /api/whales/predict
 * @desc    Predict whale intent/movement using AI model
 * @access  Public (or authenticated)
 * @body    { features: number[] }  // [tx_volume, wallet_age, liquidity_flow, ...]
 */
router.post('/predict', async (req: Request, res: Response) => {
  try {
    const { features } = req.body;

    if (!Array.isArray(features) || features.length < 3) {
      return res.status(400).json({
        success: false,
        error: 'Invalid features array. Expected at least 3 values.',
      });
    }

    const intentScore = await inferWhaleIntent(features);

    return res.status(200).json({
      success: true,
      data: {
        intentScore,
        interpretation:
          intentScore > 0.75
            ? 'High probability of significant movement'
            : intentScore > 0.45
            ? 'Moderate probability of movement'
            : 'Low probability of significant movement',
        rawScore: intentScore,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('Error predicting whale intent:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to predict whale intent',
    });
  }
});

/**
 * @route   GET /api/whales/:address
 * @desc    Get detailed info + AI prediction for a specific whale wallet
 * @access  Public
 */
router.get('/:address', async (req: Request, res: Response) => {
  try {
    const { address } = req.params;

    if (!address.match(/^0x[a-fA-F0-9]{40}$/)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid Ethereum/Polygon address',
      });
    }

    // 