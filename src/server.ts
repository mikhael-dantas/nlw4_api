import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.status(200).json({success: true})
})

app.post('/', (req, res) => {
    res.status(200).json({success: "supertrue"})
})

app.listen(3333, () => {console.log('server is running')})