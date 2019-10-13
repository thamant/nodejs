// C:\Users\Anthony\mongodb\bin\mongod.exe --dbpath "C:\Users\Anthony\mongodb-data"

const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log('Server is listening on ' + port);
});

// const Task = require('./models/task');
// const User = require('./models/user');

// const main = async () => {
//   // const task = await Task.findById('5da288d96513fb37d40e79a7');
//   // await task.populate('owner').execPopulate();
//   // console.log(task.owner);

//   const user = await User.findById('5da2881ca7703f06102e5a35');
//   await user.populate('tasks').execPopulate();
//   console.log(user.tasks);
// };

// main();
