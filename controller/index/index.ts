import { Request, Response } from 'express';
import { queryPromise } from '../../utils/mysql'
import { successResponseBody } from '../../utils/response'

class IndexController {
    index = (req: Request, res: Response) => {
        // res.send(req.headers);
        try {
            res.send('index');
        } catch (error) {
            res.send(error);
        }
    }

    // 首页随机标题
    randomTitle = async (req: Request, res: Response) => {
        try {

            // 查询随机标题
            const sql = `
                select id, title_zh, title_en, usage_count
                from t_randomtitle 
                order by rand() limit 1
            `;
            const result = await queryPromise(sql);

             // 更新使用次数
            const updateSql = `
                UPDATE t_randomtitle 
                SET usage_count = usage_count + 1 
                WHERE id = ${result[0].id}
            `;
            await queryPromise(updateSql, [result[0].id]);

            // 返回结果（返回更新后的计数）
            const finalData = {
                ...result[0],
                usage_count: result[0].usage_count + 1 
            };
  
            successResponseBody({
                res,
                status: 200,
                data: finalData,
                msg: '请求成功',
            })

        } catch (error) {
            
        }

    }

}

export const indexController = new IndexController();