import express from "express";
import { basic } from '../controller/article/basic'
const router = express.Router();

router.get("/article-list", basic.getArticleList); // 获取文章列表（无需token）


export default router;
