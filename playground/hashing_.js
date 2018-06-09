const jwt = require('jsonwebtoken');

var data = {
  id:10
};

var token = jwt.sign(data,'Prashant');
console.log(token);

var decode = jwt.verify(token, 'Prashant');
console.log('decode',decode);
