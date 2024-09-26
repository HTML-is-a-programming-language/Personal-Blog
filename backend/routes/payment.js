const express = require('express');
const router = express.Router();
const stripe = require('stripe')('your-stripe-secret-key');

router.post('/charge', async (req, res) => {
  const { amount, source } = req.body;

  try {
    const charge = await stripe.charges.create({
      amount,
      currency: 'usd',
      source,
      description: 'Portfolio site payment',
    });
    res.status(200).json(charge);
  } catch (error) {
    res.status(500).json({ error: 'Payment failed' });
  }
});

module.exports = router;
