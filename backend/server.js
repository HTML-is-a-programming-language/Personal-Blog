const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// MongoDB 연결 설정
mongoose.connect('mongodb://localhost:27017/myPortfolioDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// 기본 라우트
app.get('/', (req, res) => {
  res.send('Backend server is running.');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const portfolioRoutes = require('./routes/portfolio');
app.use('/api/portfolio', portfolioRoutes);

const blogRoutes = require('./routes/blog');
app.use('/api/blog', blogRoutes);

const paymentRoutes = require('./routes/payment');
app.use('/api/payment', paymentRoutes);