const ImageKit = require('imagekit');

const imagekit = new ImageKit({
    publicKey : "insert your public key",
    privateKey : "insert your private key",
    urlEndpoint : "insert your url endpoint"
});

module.exports = {
    imagekit
}