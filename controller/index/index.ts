import { Request, Response } from 'express';
import db from '../../dataBase';

class IndexController {
    index = (req: Request, res: Response) => {
        res.send(req.headers);
    }
}

export const indexController = new IndexController();