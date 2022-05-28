import express from 'express';
import 'dotenv/config';

import exRouter from './src/routes/example';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', exRouter);

app.listen(process.env.EXPRESS_SERVER_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`app is listening on port ${process.env.EXPRESS_SERVER_PORT}`);
});

export default app;
