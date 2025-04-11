import { Response } from "express";
import db from "../dataBase";

// 响应体格式
interface ApiResponse {
    status: number;
    data: any;
    msg: string;
    res: Response;
}

// 成功返回响应体
export const successResponseBody = (
    {
        status = 200,
        data = {},
        msg = "请求成功",
        res,
    }: ApiResponse
): void => {
    res.status(status).json({
        status,
        data,
        msg,
    })
};

