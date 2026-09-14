const express = require('express');
const app = express();
app.use(express.json());

let rates = { buyRate: 100, sellRate: 95 };

app.get('/api/rates', (req, res) => res.json(rates));
app.post('/api/admin/rates', (req, res) => {
  rates = req.body;
  res.json({ success: true, rates });
});

app.listen(5000, () => console.log('Digi Bank Server running on port 5000'));