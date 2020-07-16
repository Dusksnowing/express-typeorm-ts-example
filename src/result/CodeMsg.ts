export class CodeMsg {
    code: number;
    msg: string;

    //通用错误
    static SUCESS: CodeMsg = new CodeMsg(2000, 'sucess');
    static ERROR: CodeMsg = new CodeMsg(4000, 'error');

    //资源错误
    static USER_NOT_FOUNT: CodeMsg = new CodeMsg(4001, 'user not fount');

    //数据库错误
    static DATABASE_WRONG: CodeMsg = new CodeMsg(6001, 'database wrong');

    //服务端错误
    static SERVER_WRONG: CodeMsg = new CodeMsg(5001, 'server is wrong');

    constructor(code: number, msg: string) {
        this.code = code;
        this.msg = msg
    }
}
