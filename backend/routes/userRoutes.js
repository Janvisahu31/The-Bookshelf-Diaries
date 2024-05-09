import { Router } from 'express';

import User from '../models/User.js';

const router = Router();

// Register User
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await create({ username, password });
    res.status(201).json({ username: user.username, token: generateToken(user._id) });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Login User
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await findOne({ username });
  if (user && (await user.matchPassword(password))) {
    res.json({
      username: user.username,
      token: generateToken(user._id)
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

// Generate JWT
const generateToken = (id) => {
  return sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

export default router;
