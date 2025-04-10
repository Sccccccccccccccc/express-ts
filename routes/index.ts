import express from 'express';
import { indexController } from "../controller/index";
var router = express.Router();


/* GET home page. */
router.get('/', indexController.index);

export default router;
