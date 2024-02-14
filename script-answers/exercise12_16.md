# Note to myself

## Go to todo-app/todo-backend
```
cd todo-app/todo-backend
```

## Start the docker container
```
docker compose -f docker-compose.dev.yml up
```

## Open a browser and visit http://localhost:3001/statistics

## To edit backend while the backend is running in the container

### Edit the file in todo-app/todo-backend/routes/index.js

```
/* GET added todos count stats. */
router.get('/statistics', async (req, res) => {
  const addedTodosCount = await redis.getAsync('added_todos_count')
  res.json({
    "added_todos": addedTodosCount? parseInt(addedTodosCount) : 0,
    "dummy": 333 // add this line
  });
}
);
```

### And see the change on the browser again at http://localhost:3001/statistics

### To stop the containers
```
docker compose -f docker-compose.dev.yml down
```
Or to remove volumes altogether
```
docker compose -f docker-compose.dev.yml down --volumes
```