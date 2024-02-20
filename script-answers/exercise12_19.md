# How to run ex 12.19

## Since the `docker-compose.dev.yml` under `todo-app` don't take care of building of images, one needs to first build the corresponding images at their own directories, respectively:

### For frontend, cd to `todo-frontend`, and run `docker compose` up then down to build the image `todo-frontend-dev`
```
cd todo-frontend
docker compose -f docker-compose.dev.yml up -d  
docker compose -f docker-compose.dev.yml down -v
```

### Similarly for backedn, cd to `todo-backend`, and do the same
```
cd todo-backend
docker compose -f docker-compose.dev.yml up -d  
docker compose -f docker-compose.dev.yml down -v
```

## Then one can start the real job. At the parent directory todo-app, run

```
docker compose -f docker-compose.dev.yml up -d  
```

## Visit http://localhost:8080 to see the frontend, and http://localhost:8080/api to see the backend

## To *'develop with containers'*, one can edit the source code of either the frontend or the backend source code to see the instant change on the browswer. (manual refresh maybe needed)

## When done, run
```
docker compose -f docker-compose.dev.yml down -v
```

## Remember to remove volumes with `-v` for cleaning up