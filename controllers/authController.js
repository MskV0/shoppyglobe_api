const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });
  console.log(`Checking for existing user with email: ${email}`);
  console.log(`Existing user : ${existingUser ? existingUser.email : 'No user found' }`);
  
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists. Please log in.' });
  }

  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ email, password: hash });

  res.json({ message: 'User registered successfully' });
};


exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ error: 'User not found' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: 'Invalid password' });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token });
};
