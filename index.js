import express from 'express';
import connectDB from './config/dataBase';
import userRoutes from './routes/userRoutes';

const app = express();
app.use(express.json());

app.post('/user', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Connected to database and listening on port ${PORT}`);
  } catch (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1);
  }
});