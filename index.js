import express from 'express';
import 'dotenv/config';

// config
import log from './src/config/logging';
import db, { connectToPostgres } from './src/config/db';

import exRouter from './src/routes/example';

const app = express();

// DB-Connection
connectToPostgres(db);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', exRouter);

app.listen(process.env.EXPRESS_SERVER_PORT, () => {
  log.info(`app is listening on port ${process.env.EXPRESS_SERVER_PORT}`);
});

export default app;
