import { Request, Response } from 'express';
import db from '../../dataBase';

class IndexController {
    index = (req: Request, res: Response) => {
        res.send('Hello Express!!!');

  
    }
}

class UserController {
    
    register = (req: Request, res: Response) => {
        // 注册
    }

    login = (req: Request, res: Response) => {
        // 登录
    }

}

export const userController = new UserController();
export const indexController = new IndexController();