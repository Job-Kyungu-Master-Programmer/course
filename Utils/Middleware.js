// middleWare

const Logger = require('./Logger')


const requestLogger = (request, response, next) => {
    Logger.info('Method', request.method)
    Logger.info('Path', request.path)
    Logger.info('Body', request.body)
    next();
}

const unknow = () => {
    response.status(404).send('Page NOT FOUND 404 MERCI')
}

module.exports = {
    requestLogger,
    unknow
}