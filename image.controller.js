const imagekit = require('./imagekit.config')
const path = require('path');

const uploadMedia = async (req,res) => {
let imageFile;
if (req.file) {
    try {
        const strFile = req.file.buffer.toString('base64');
        imageFile = await imagekit.upload({
            file: strFile,
            fileName: Date.now() + path.extname(req.file.originalname),
        });
    } catch (error) {
        console.error('Error uploading image:', error);
        return res.status(500).json({
            status: false,
            message: 'Error uploading image',
            error: error.message
        });
    }
}
}

module.exports = {
    uploadMedia
}

