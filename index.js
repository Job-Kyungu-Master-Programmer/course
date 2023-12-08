const app = require('./app')
const Config = require('./Utils/Config')
const Logger = require('./Utils/Logger')

app.listen(Config.PORT, () => {
    Logger.info(` Server running on PORT ${Config.PORT}`)
})