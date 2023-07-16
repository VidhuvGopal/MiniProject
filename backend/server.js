const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const app = express();
const port = 3000;
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

// New User Registration API
app.post('/register', async (req, res) => {
  try {
    const { name, dateOfBirth, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'Email is already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, dateOfBirth, email, password: hashedPassword });
    await user.save();

    // Generate JWT
    const token = jwt.sign({ userId: user._id }, 'your_secret_key');

    res.json({ message: 'Registration successful', token, user: { name, dateOfBirth, email } });
  } catch (error) {
    console.error('Registration failed', error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Login API
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare passwords
    const passwordsMatch = await bcrypt.compare(password, user.password);
    if (!passwordsMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign({ userId: user._id }, 'your_secret_key');

    res.json({ message: 'Login successful', token, user: { name: user.name, dateOfBirth: user.dateOfBirth, email } });
  } catch (error) {
    console.error('Login failed', error);
    res.status(500).json({ error: 'Login failed' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
