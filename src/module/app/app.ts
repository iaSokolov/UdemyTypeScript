import { Log } from '../common/log' // импорт конкретного объекта из модуля 
import Param from '../common/param' // импорт default экспорта 
import EndParam from '../common/param' // импорт default экспорта с переименованием 
import { StartMessage as Start, EndMessage as End } from '../common/param' // импорт отдельных объектов с переименованием 

const param = new EndParam(new Start('one').message, new End('two').message)

const logObj = new Log()
logObj.print(param.start)
logObj.print(param.end)