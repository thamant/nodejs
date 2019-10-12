require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5d9fcb287a1a3d02f8fea958')
//   .then(task => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => {
//     console.log(e);
//   });

const deleteTaskAndCount = async id => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount('5d9fd3c93ca09417606e5c6c')
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });
