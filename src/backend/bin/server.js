const app = require('../app')

const dbConnect = require('../model/mongoDb')
const { createDirIfIsNotExist } = require('../utils/createDir')
const { DIRS } = require('../utils/constants')

const PORT_BACKEND = process.env.PORT_BACKEND || 3000

const serverInit = async() => {
  await createDirIfIsNotExist(DIRS.upload)
  await createDirIfIsNotExist(DIRS.public)
  await createDirIfIsNotExist(DIRS.avatar)
  app.listen(PORT_BACKEND, () => {
    console.log(`<<< Server running. Use our API on port: http://localhost:${PORT_BACKEND} >>>`)
  })
}

// dbConnect(serverInit)
