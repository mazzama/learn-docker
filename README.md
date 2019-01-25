# Belajar Docker

## Docker Command
### Basic Command
1. `docker images` / `docker image ls` : Show all docker images
2. `docker ps [`-a` / `--all`]` : show all created container
3. `docker run <images>` : `docker create <imageName>`+ `docker run [containerId]` 
4. `docker system prune` : remove all container + all dangling image + all build caches
5. `docker logs <containerId>` : get logs from a container
6. `docker stop <containerid>`
7. `docker kill <containerId>`
8. `docker run -p <portIncomingrequest>:<portInsideContainer> <images>` : docker run with port mapping

### Multiple command
1. `docker exec -it <containerId> <command>` (for example `redis-cli`): exec -> execute an additional command in a container,  it -> allow us to provide input to the container and get formatted output
2. `docker exec -it <containerId> <sh/bash/zsh/powershell>` : execute command inside of a container

## Create Docker Image
### Create Dockerfile
1. `FROM` : set the base image
2. `WORKDIR` : sets the working directory.
2. `COPY` : copies new files or directories to container.
3. `RUN` : execute any commands in a new layer on top of the current image and commit the results
4. `CMD` : provide defaults for an executing container 

### Command
1. `docker build .` : build new image from dockerfile
2. Option `-t <projecName>` : build new image with tag 
 