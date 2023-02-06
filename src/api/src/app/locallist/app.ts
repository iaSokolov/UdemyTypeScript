import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

import LocalListAttr from './model/LocalListAttr';
import LocalListAttrVals from './model/LocalListAttrVals';
import LocalListEntry from './model/LocalListEntry';
import LocalListMeta from './model/LocalListMeta';
import LocalListResponceData from './model/LocalListResponceData';
import LocalListResponseError from './model/LocalListResponseError';
import LocalListResponseSuccess from './model/LocalListResponseSuccess';

export default class LocalListService {

    getAbsenceError(request: Request, response: Response, nextFunction: NextFunction): void {
        console.log('get absence error')

        let requestResponse = new LocalListResponseError('ca7e807aeb189e51:03960f695fa394c8', 'Справочник не найден')

        response.status(200).json(requestResponse)
    }

    getAbsence(request: Request, response: Response, nextFunction: NextFunction): void {
        console.log('get absence')

        let requestResponse = new LocalListResponseSuccess(
            new LocalListResponceData(
                new LocalListMeta(10, 1, false, 1, 10),
                [
                    new LocalListEntry(1, [new LocalListAttrVals(new LocalListAttr(225, 'Формат даты', 55, false, 'DATE_FORMAT'), 'dd.MM')]),
                    new LocalListEntry(1, [new LocalListAttrVals(new LocalListAttr(225, 'Формат даты', 55, false, 'DATE_FORMAT'), 'dd.MM')])
                ]
            )
        )

        response.status(200).json(requestResponse)
    }

    getWorkpalceType(request: Request, response: Response, nextFunction: NextFunction): void {
        console.log('get absence')

        let requestResponse = new LocalListResponseSuccess(
            new LocalListResponceData(
                new LocalListMeta(10, 1, false, 1, 10),
                [
                    new LocalListEntry(1, [new LocalListAttrVals(new LocalListAttr(225, 'Формат даты', 55, false, 'DATE_FORMAT'), 'dd.MM')]),
                    new LocalListEntry(1, [new LocalListAttrVals(new LocalListAttr(225, 'Формат даты', 55, false, 'DATE_FORMAT'), 'dd.MM')])
                ]
            )
        )

        response.status(200).json(requestResponse)
    }
}