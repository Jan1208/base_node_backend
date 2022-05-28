import express from 'express';

import controller from '../controller/example';

const router = express.Router();
const BASE_PATH = '/example';

router.get(BASE_PATH, controller);

export default router;
