import express from 'express';
import cors from 'cors';
import { claudeRouter } from './routes/claude';

const app = express();

app.use(express.json({ limit: '10kb' }));
app.use(cors({ origin: process.env.FRONTEND_URL }));

app.get('/health', (_req, res) => {
  res.json({ ok: true });
});

app.use('/api/claude', claudeRouter);

const PORT = process.env.PORT ?? 4000;
app.listen(PORT, () => {
  console.log(`claude-proxy running on port ${PORT}`);
});
