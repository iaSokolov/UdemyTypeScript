import ResponseSuccess from './model/ResponseSuccess';
import ResponseError from './model/ResponseError';
import RequestBody from './model/Request';

import Success from './model/Success';
import Error from './model/Error';
import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

export default class Recruitment {
    getSuccess(request: Request, response: Response, nextFunction: NextFunction): void {
        console.log('get success')
        response.status(200).json(new ResponseSuccess([new Success(uuidv4(), '2', '3')], '1', 12))
    }

    getError(request: Request, response: Response, nextFunction: NextFunction): void {
        console.log('get error')
        response.status(200).json(new ResponseError([new Error(-1, 'message')], '1', 12));
    }

    postRequest(request: Request, response: Response, nextFunction: NextFunction): void {
        const requestBody: RequestBody = request.body
        if (requestBody.method != 'tech-job-requisition-list') {
            response.status(400).json(new ResponseError([new Error(-100, 'Error method')], requestBody.params.jsonrpc, requestBody.params.id));
        } else {
            console.log(requestBody.params['position-numbers'])         
            console.log(requestBody.params['position-numbers'].length)         
            if (requestBody.params['position-numbers'].length == 1) {    
                // для одного возврат нормальный                
                const responseSuccess: ResponseSuccess = new ResponseSuccess(
                    requestBody.params['position-numbers'].map((it) =>
                        new Success('1', it, 'DRAFT')
                    ),
                    requestBody.params.jsonrpc,
                    requestBody.params.id,
                )    
                response.status(200).json(responseSuccess)

            } else if (requestBody.params['position-numbers'].length == 2) { 
                // для двух ответа вообще нет
            } else {                 
                // для трех и более - ошибка
                //response.status(500).json('Server error')
            }
        }
    }
}