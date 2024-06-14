const express = require('express');
const multer = require('multer');
const upload = multer()
const { uploadMedia } = require('./image.controller')

const port = process.env.APP_PORT || 3000;

const app = express();
app.post('/upload' , upload.single('foto'), uploadMedia)

app.listen(port, () => {
    console.log(`running on port ${port}`)
})