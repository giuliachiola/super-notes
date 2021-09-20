# Docker

Docker is used to package and conteinerized applications, to ship them and ru them anywhere anytime.

## Glossary

### Containers

- completely isolated environments.
- running instances of images that are isolated, have their own enviroment and sets of processes.
- do not run operating systems, but tasks, databases, applications
- a container lives as long as its processes inside are alive

### Images

- used to create one or more container.

## Commands

| Command                                                    | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- |
| `docker start [container-name]`                            |                                                            |
| `docker ps`                                                | list running containers                                    |
| `docker ps -a`                                             | list all containers (running or not)                       |
| `docker stop [container-name]`                             |                                                            |
| `docker rm [container-name]`                               | remove a container                                         |
| `docker images`                                            | list of images                                             |
| `docker rmi [image-name]`                                  | remove image                                               |
| `docker pull [image-name]`                                 | pull an image without running it                           |
| `docker exec [container-name] [command]`                   | run a command inside a container                           |
| `docker rm -d [???]`                                       | run Docker in detached mode in background                  |
| `docker attach [???]`                                      | ???                                                        |
| `docker run [image-name]:[tag]`                            | run image with a specific tag (by default `latest`)        |
| `docker run -i [image-name]`                               | run Docker in interactive mode                             |
| `docker run -it [image-name]`                              | run Docker in interactive mode with `-t` = pseudo terminal |
| `docker run -p 80:5000 [container-name]`                   | mapping Docker ports                                       |
| `docker run -v [outside-dir]:[inside-dir]`                 | volume mapping                                             |
| `docker inspect [container-name]`                          | inspect container                                          |
| `docker logs [container-name]`                             | show container logs                                        |
| `docker run -e [ENV_VARNAME]=[env_value] [container-name]` | set environment variable                                   |

### Mapping ports

```shell
docker run -p  80:5000 [container-name]
```

The user can access Docker host at `http://192.168.1.5.:80`

### Volume mapping

```shell
docker run -v [outside-dir]:[inside-dir]
```

### Environment variables

```shell
docker run -e APP_COLOR=pink simple-webapp-color
docker run -e APP_COLOR=blue simple-webapp-color
docker run -e APP_COLOR=green simple-webapp-color
```

## How to create a Docker image

- create a Dockerfile
- launch

```shell
docker build Dockerfile -t [container-name]
```

to publish it to the Docker hub (public)

```shell
docker push [username]/[container-name]
```
