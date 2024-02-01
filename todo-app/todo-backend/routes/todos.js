const redis = require('../redis')
const express = require('express');
const { Todo } = require('../mongo')
const router = express.Router();

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })

  // Increment the added todos count in Redis
  let currentAddedTodosCount = await redis.getAsync('added_todos_count')
  currentAddedTodosCount = currentAddedTodosCount ? parseInt(currentAddedTodosCount) : 0
  await redis.setAsync('added_todos_count', currentAddedTodosCount + 1)

  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()  
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  res.send(req.todo);
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  const updatedFields = req.body
  Object.assign(req.todo, updatedFields)
  const updatedTodo = await req.todo.save()
  res.json(updatedTodo)
});

router.use('/:id', findByIdMiddleware, singleRouter)


module.exports = router;
