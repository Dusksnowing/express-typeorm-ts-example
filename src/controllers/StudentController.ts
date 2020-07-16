import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Student} from "../entity/Student"
import {CodeMsg} from "../result/CodeMsg";
import {Result} from "../result/Result";
import {DataBaseCode} from "../statecode/DataBaseCode";


export async function get(request: Request, response: Response) {
    const studentRepository = getManager().getRepository(Student);
    let query = request.query;
    let s = new Student();
    s.name = <string>query.name;
    let result = await studentRepository.findOne(s);
    console.log(result);
    result == undefined
        ? response.json(CodeMsg.SERVER_WRONG)
        : response.json(Result.sucess(result));
}

export async function getAll(request: Request, response: Response) {
    const studentRepository = getManager().getRepository(Student);
    let students = await studentRepository.find();
    response.json(Result.sucess(students));
}

export async function insert(request: Request, response: Response) {
    let studentRepository = getManager().getRepository(Student);
    let body = request.body;
    if (Object.keys(body).length !=0){
        let student = new Student();
        student.name = body.name;
        student.age = body.age;
        student.address = body.address;
        let result = await studentRepository.insert(student)
            .catch(reason => DataBaseCode.INSERT_WRONG);

        result == DataBaseCode.INSERT_WRONG
            ? response.json(CodeMsg.SERVER_WRONG)
            : response.json(CodeMsg.SUCESS);
    }
}

//
// export async function getOne(request: Request, response: Response) {
//     const categoryRepository = getManager().getRepository(Category);
//     const category = await categoryRepository.findOne(request.params.id, { relations: ["posts"] });
//
//     // if category was not found return 404 to the client
//     if (!category) {
//         response.status(404);
//         response.end();
//         return;
//     }
//
//     response.send(category);
// }
//
// export async function put(request: Request, response: Response) {
//     const categoryRepository = getManager().getRepository(Category);
//     const category = await categoryRepository.findOne(request.params.id);
//
//     // if category was not found return 404 to the client
//     if (!category) {
//         response.status(404);
//         response.end();
//         return;
//     }
//
//     category.name = request.body.name || category.name;
//
//     await categoryRepository.save(category);
//
//     response.send(category);
// }
//
// export async function remove(request: Request, response: Response) {
//     const categoryRepository = getManager().getRepository(Category);
//     const category = await categoryRepository.findOne(request.params.id);
//
//     // if category was not found return 404 to the client
//     if (!category) {
//         response.status(404);
//         response.end();
//         return;
//     }
//
//     await categoryRepository.remove(category);
//
//     response.send(category);
// }
