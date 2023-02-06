import express, { Request, Response, NextFunction } from 'express';
import Recruitment from './app/recruitment/app';
import LocalListService from './app/locallist/app';
import IResponse from './app/recruitment/model/IResponse';
import AppRequest from './app/recruitment/model/Request';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/succerss', new Recruitment().getSuccess);
app.get('/error', new Recruitment().getError);

app.post<{}, IResponse, AppRequest>('/app-recruitment/json-rpc/recruitment', new Recruitment().postRequest) 

app.get('/locallist/absence', new LocalListService().getAbsence);
app.get('/locallist/absence/error', new LocalListService().getAbsenceError);
app.get('/locallist/workpalceType', new LocalListService().getWorkpalceType);

app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
});