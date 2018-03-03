//MySQL数据库配置
export const mysql = {
    db: "issue",
    username: "root",
    password: "root",
    host: "localhost"
}

//sequelize SQL日志输出
export const sequelizeLog = function (msg:string) {
    console.log(msg);
}