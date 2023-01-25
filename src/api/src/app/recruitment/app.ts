import ResponseSuccess from './model/ResponseSuccess';
import ResponseError from './model/ResponseError';

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
        console.log(request.body)        
        response.status(200).json(request.body);
    }
}