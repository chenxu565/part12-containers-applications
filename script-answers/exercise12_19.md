# How to run ex 12.19

## At directory todo-app, run

```
docker compose -f docker-compose.dev.yml up -d  
```

## Visit http://localhost:8080

## When done, run
```
docker compose -f docker-compose.dev.yml down -v
```

## remember to remove volume with `-v`