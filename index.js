import express from 'express'
import { connectDB } from './DB/connection.js'
import * as routes from './modules/index.router.js'

const app = express()
const port = 3000
const baseUrl = '/api'

app.use(express.json())
app.use(`${baseUrl}/courses`, routes.courseRouter)

app.use((req, res, next) => {
    res.status(404).json({ message: '404 Not Found Page' });
});


connectDB()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))