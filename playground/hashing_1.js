var bcrypt  = require('bcryptjs');

var password = '123abc';

// bcrypt.genSalt(10,(err,salt)=>{
//   bcrypt.hash(password, salt, (err, hash)=>{
//     console.log(hash);
//   });
// });

var hashedPassword = '$2a$10$vvd7PD2ySXC36R81MEANduT9SQG6pxfAixXDr.pb7tz14ehuGr/P.';

bcrypt.compare(password, hashedPassword,(err,res)=>{
  console.log(res);
})
