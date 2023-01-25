import express, { Request, Response, NextFunction } from 'express';
import Recruitment from './app/recruitment/app';
import IResponse from './app/recruitment/model/IResponse';
import AppRequest from './app/recruitment/model/Request';

const app = express();
const port = 3000;

app.get('/succerss', new Recruitment().getSuccess);
app.get('/error', new Recruitment().getError);
//Params,ResBody,ReqBody,ReqQuery,Locals
app.post<{}, IResponse, AppRequest>('/post', new Recruitment().postRequest) 

app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
});