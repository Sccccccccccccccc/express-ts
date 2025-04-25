import express from 'express';
import { indexController } from "../controller/index";
const router = express.Router();


/* GET home page. */
router.get('/index', indexController.index);
router.get('/randomTitle', indexController.randomTitle);

export default router;
