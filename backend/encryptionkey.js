const crypto = require('crypto');
const passphrase = 'pooja';
const key = crypto.pbkdf2Sync(passphrase, 'salt', 100000, 32, 'sha256');
module.exports=key