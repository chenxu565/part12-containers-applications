# How to run ex 12.20

## Since the `docker-compose.yml` under `todo-app` don't take care of building of images, one needs to first build the corresponding images at their own directories, respectively:

### For frontend, cd to `todo-frontend`, and build the image
```
cd todo-frontend
docker build -t todo-frontend-prod . 
```
#### Notice that now the frontend is talking to the production mode backend at `localhost:8080/api`.

### For backend, cd to `todo-backend`, and run `docker compose` up then down to build the image `todo-backend-prod`
```
cd todo-backend
docker compose -f docker-compose.yml up -d  
docker compose -f docker-compose.yml down -v
```

## Then one can start the real job. At the parent directory `todo-app`, run

```
docker compose -f docker-compose.yml up -d  
```

## Visit http://localhost:8080 to see the frontend, and http://localhost:8080/api to see the backend

## When done, run
```
docker compose -f docker-compose.yml down -v
```

## Remember to remove volumes with `-v` for cleaning up