import {CodeMsg} from "result/CodeMsg";
export class Result<T> {
    private code: number;
    private msg: string;
    private data: T;

    //sucess
    // @ts-ignore
    static sucess(data: T): Result<T>{
        return new Result(undefined, data);
    }

    //error
    // @ts-ignore
    static error(codemsg: CodeMsg): Result<T>{
        return new Result(codemsg, undefined);
    }

    constructor(codemsg?: CodeMsg, data?: T) {
        if (data){
            this.code = 200;
            this.msg = 'sucess';
            this.data = data
        }else if(codemsg){
            this.code = codemsg.code;
            this.msg = codemsg.msg;
        }
    }
}
