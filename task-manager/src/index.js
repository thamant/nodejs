// C:\Users\Anthony\mongodb\bin\mongod.exe --dbpath "C:\Users\Anthony\mongodb-data"

const express = require('express');
const User = require('./models/user');
const Task = require('./models/task');
require('./db/mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch {
    res.status(500).send();
  }

  // User.find({})
  //   .then(users => {
  //     res.send(users);
  //   })
  //   .catch(() => {
  //     res.status(500).send();
  //   });
});

app.get('/users/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch {
    res.status(500).send();
  }

  // User.findById(_id)
  //   .then(user => {
  //     // Only works if query is length 12
  //     if (!user) {
  //       console.log('no user');
  //       return res.status(404).send();
  //     }

  //     res.send(user);
  //   })
  //   .catch(() => {
  //     console.log('failure');
  //     res.status(500).send();
  //   });
});

app.post('/users', async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }

  // user
  //   .save()
  //   .then(() => {
  //     res.status(201).send(user);
  //   })
  //   .catch(e => {
  //     res.status(400).send(e);
  //   });
});

app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (e) {
    res.status(500).send();
  }

  // Task.find({})
  //   .then(tasks => {
  //     res.send(tasks);
  //   })
  //   .catch(() => {
  //     res.status(500).send();
  //   });
});

app.get('/tasks/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const task = await Task.findById(_id);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (e) {
    res.status(500).send();
  }

  // Task.findById(_id)
  //   .then(task => {
  //     // Only works if query is length 12
  //     if (!task) {
  //       return res.status(404).send();
  //     }
  //     res.send(task);
  //   })
  //   .catch(() => {
  //     res.status(500).send();
  //   });
});

app.post('/tasks', async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.status(200).send(task);
  } catch (e) {
    res.status(400).send(e);
  }

  // task
  //   .save()
  //   .then(() => {
  //     res.status(201).send(task);
  //   })
  //   .catch(e => {
  //     res.status(400).send(e);
  //   });
});

app.listen(port, () => {
  console.log('Server is listening on ' + port);
});
