const app = require('../app')

const dbConnect = require('../model/mongoDb')
const { createDirIfIsNotExist } = require('../utils/createDir')
const { DIRS } = require('../utils/constants')

const PORT = process.env.PORT || 5000
const HOST = process.env.HOST || '0.0.0.0'

const serverInit = async() => {
  await createDirIfIsNotExist(DIRS.upload)
  await createDirIfIsNotExist(DIRS.public)
  await createDirIfIsNotExist(DIRS.avatar)
  app.listen(PORT, HOST, () => {
    console.log(`<<< Server running. Use our API on port: http://localhost:${PORT} >>>`)
  })
}

dbConnect(serverInit)
