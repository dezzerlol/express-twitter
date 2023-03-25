import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { indexRouter } from './router'
import { errorHandler } from './errorHandler'

const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(indexRouter)
app.use(errorHandler)

app.get('/health', (req, res) => {
  res.send('OK')
})

export { app }
