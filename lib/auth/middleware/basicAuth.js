'use strict';

const { Users } = require('../model/users.js');
const base64 = require('base-64');
const bcrypt = require('bcrypt');

async function basic(req, res, next) {
  /*
    req.headers.authorization is : "Basic sdkjdsljd="
    To get username and password from this, take the following steps:
      - Turn that string into an array by splitting on ' '
      - Pop off the last value
      - Decode that encoded string so it returns to user:pass
      - Split on ':' to turn it into an array
      - Pull username and password from that array
  */

  let basicHeaderParts = req.headers.authorization.split(' ');  // ['Basic', 'sdkjdsljd=']
  let encodedString = basicHeaderParts.pop();  // sdkjdsljd=
  let decodedString = base64.decode(encodedString); // "username:password"
  let [username, password] = decodedString.split(':'); // username, password

  const user = await Users.findOne({ where: { username: username } });
  const valid = await bcrypt.compare(password, user.password);

  if (valid){
    req.user = user;
    next();
  } else {
    next('Invalid User');
  }
}

module.exports = basic;