import express, { Express } from 'express'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config();

const app: Express = express()
const port = process.env.PORT
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')

app.get('/', (req, res) => {
    res.send('working')
})

function main() {
    app.use(express.json())
    app.use(fileUpload({}))
    app.use(cors())
    app.use(express.static(path.resolve(__dirname, 'static')))
    app.use('/api', router)
    app.listen(port, () => {
        console.log(`Server stated on port ${port}`)
    })
}

main()