const crypto = require('crypto');

const config = require('../../config/config');

exports.encrypt = word => {
    let cipher = crypto.createCipheriv(
        'aes-256-cbc',
        Buffer.from(config.encryption.key, 'hex'),
        Buffer.from(config.encryption.iv, 'hex')
    );
    let encrypted = cipher.update(word);
    encrypted = Buffer.concat([encrypted, cipher.final()]);;
    return encrypted.toString('hex');
}