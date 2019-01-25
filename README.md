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

### Multiple command
1. `docker exec -it <containerId> <command>` (for example `redis-cli`): exec -> execute an additional command in a container,  it -> allow us to provide input to the container and get formatted output
2. `docker exec -it <containerId> <sh/bash/zsh/powershell>` : execute command inside of a container

## Create Docker Image
### Create Dockerfile
1. 

### Command
1. `docker build .` : build new image from dockerfile
2. `docker build -t <projecName> .` : build new image with tag 