const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');
const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users =[{
  _id: new ObjectID(),
  email:'gupt@gamil.com',
  password: 'Prashant',
  tokens:[{
    access:'auth',
    token: jwt.sign({_id: userOneId, access:'auth'},'abc123').toString()
  }]
},{
  _id: userTwoId,
  email:'js@gmail.com',
  password: 'Prashant'
}];
const todos =[{
  _id: new ObjectID(),
  text:'First'
},{
  _id: new ObjectID(),
  text:'Second',
  completed:true,
  //completedAt:333
}];

const populateTodos =(done)=>{
  Todo.remove({}).then(()=>{
    return Todo.insertMany(todos);
  }).then(()=>done());
};

const populateUsers =(done)=>{
  user.remove({}).then(()=>{
    var userOne= new User(users[0]).save();
    var userTwo = new User(users[1]).save();

    return   Promise.all([userOne,userTwo])
  }).then(()=>done());
};
module.exports = {populateTodos, todos, users, populateUsers};
