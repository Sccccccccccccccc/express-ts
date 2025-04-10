import { Request, Response } from 'express';


class UserController {
    
    register = (req: Request, res: Response) => {
        // 注册
    }

    login = (req: Request, res: Response) => {
        // 登录
    }

}

export const userController = new UserController();