const ImageKit = require("imagekit");

const imagekit = new ImageKit({
    publicKey : "insert public key",
    privateKey : "insert private key",
    urlEndpoint : "insert your url endpoint"
});

module.exports = {
    imagekit
}