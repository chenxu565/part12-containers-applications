const redis = require('../redis')
const express = require('express');
const router = express.Router();

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

/* GET added todos count stats. */
router.get('/statistics', async (req, res) => {
  const addedTodosCount = await redis.getAsync('added_todos_count')
  res.json({
    "added_todos": addedTodosCount? parseInt(addedTodosCount) : 0
  });
}
);

module.exports = router;
