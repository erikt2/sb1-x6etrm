import express from 'express';
import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

// Enable CORS for the Vite development server
app.use(cors({
  origin: 'http://localhost:5173', // Vite's default port
  credentials: true
}));

app.use(express.json());

// Initialize Plaid client
const configuration = new Configuration({
  basePath: PlaidEnvironments[process.env.PLAID_ENV || 'sandbox'],
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
      'PLAID-SECRET': process.env.PLAID_SECRET,
    },
  },
});

const plaidClient = new PlaidApi(configuration);

// Create a link token
app.post('/api/create_link_token', async (req, res) => {
  try {
    const response = await plaidClient.linkTokenCreate({
      user: { client_user_id: 'user-id' },
      client_name: 'FinanceFlow',
      products: ['auth', 'transactions'],
      country_codes: ['US'],
      language: 'en',
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error creating link token:', error);
    res.status(500).json({ error: error.message });
  }
});

// Exchange public token for access token
app.post('/api/exchange_public_token', async (req, res) => {
  const { public_token } = req.body;
  try {
    const response = await plaidClient.itemPublicTokenExchange({
      public_token,
    });
    const accessToken = response.data.access_token;
    // Store this access_token securely for the user
    res.json({ status: 'success' });
  } catch (error) {
    console.error('Error exchanging public token:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get accounts
app.get('/api/accounts', async (req, res) => {
  try {
    // In production, you would get the access_token from your database based on the authenticated user
    const access_token = 'your-access-token';
    const response = await plaidClient.accountsGet({
      access_token,
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error getting accounts:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get transactions
app.get('/api/transactions', async (req, res) => {
  try {
    const access_token = 'your-access-token';
    const response = await plaidClient.transactionsGet({
      access_token,
      start_date: '2024-01-01',
      end_date: '2024-03-19',
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error getting transactions:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});