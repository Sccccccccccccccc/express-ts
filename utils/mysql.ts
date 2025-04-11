
import db from "../dataBase";
import { QueryOptions } from "mysql";

// 使用Promise封装数据库查询，方便使用async/await来取出查询结果
export const queryPromise = (
    options: string | QueryOptions,
    values?: any
  ): Promise<any> => {
    return new Promise((resolve, reject) => {
      if (values) {
        db.query(options, values, (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
      } else {
        db.query(options, (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
      }
    });
  };