import type { Request, Response } from 'express'
import axios from "axios";
import { queryPromise } from '../../utils/mysql'
import { successResponseBody } from '../../utils/response'

class Basic {

    // 获取文章列表
    getArticleList = async (req: Request, res: Response) => {

        const { pageNum = 1, pageSize = 5 } = req.query // 页码，每页条数

        if (<number>pageNum < 1 || <number>pageSize < 1) {
            res.status(400).json(
                { code: 400, message: 'pageNum 和 pageSize 必须大于0' }
            )
            return;
        }

        const offset = (<number>pageNum - 1) * <number>pageSize
        
        try {
            const sql = `SELECT * FROM t_article LIMIT ${offset}, ${pageSize}`
            const result = await queryPromise(sql)

            // res.send(result)
            successResponseBody({
                res,
                status: 200,
                data: result,
                msg: '获取文章列表成功',
            })

        } catch (error) {
            res.status(500).json(
                { code: 500, message: '获取文章列表失败' }
            )
            return;
        }
    }

    // 获取文章详情
    getArticleDetail = async (req: Request, res: Response) => {

        const { id } = req.query
        if (!id) {
            res.status(400).json(
                { code: 400, msg: 'id 不能为空' }
            )
            return;
        }
        try {
            const sql = `SELECT * FROM t_article WHERE id = ${id}`
            const result = await queryPromise(sql)

            if(result.length === 0) {
                res.status(404).json(
                    { code: 404, msg: '文章不存在' }
                )
                return;
            }

            successResponseBody({
                res,
                status: 200,
                data: result,
                msg: '获取文章详情成功',
            })

        } catch (error) {
            res.status(500).json(
                { code: 500, msg: '获取文章详情失败' }
            )
            return;
        }
        
    }

}

export const basic = new Basic();
