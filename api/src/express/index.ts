import express from 'express'
import contentType from './middlewares/content-type'
import cors from './middlewares/cors'
import jsonParser from './middlewares/json-parser'

const app = express()

app.disable('x-powered-by')
app.use(cors)
app.use(jsonParser)
app.use(contentType)

export default app