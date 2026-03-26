import dotenv from 'dotenv';
dotenv.config(); // load .env variables

import app from './app';

const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
