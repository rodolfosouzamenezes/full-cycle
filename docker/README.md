## Tipos de NETWORK
__Bridge:__ é a rede padrão do Docker quando nehum tipo de rede é especificado

__Host:__ os conteiners compartilham a mesma interface de rede do host, sem a necessidade da redirecionamento da porta

__Overlay:__ é uma rede distribuída que permite comunicação em diferentes hosts, útil em ambientes de orquestação de containers (Kubernetes e Docker Swarm)

__Macvlan:__ permite que os conteiners possuam seus próprios endereços MAC e IP na rede de host

__None:__ o contêiner não possui conectividade externa

## Multi-stage Build
Um "multi-stage build" no Docker refere-se a uma prática em que você utiliza várias imagens Docker em um único Dockerfile para otimizar o tamanho da sua imagem final. Essa abordagem é útil para reduzir o tamanho das imagens Docker eliminando elementos desnecessários e mantendo apenas o necessário para executar a aplicação.

## Diferença entre ENTRYPOINT e CMD
ENTRYPOINT é um comando fixo, que sempre será rodado, já o CMD pode ser sobrescrito
```Dockerfile
ENTRYPOINT [ "echo", "COMANDO FIXO" ]
CMD [ "COMANDO VARIÁVEL" ]
```
quando rodarmos a imagem será exibido:
`COMANDO FIXO COMANDO VARIÁVEL`, porém podemos sobrescrever o conteúdo do CMD dessa forma:
```
docker run imagem-qualquer CMD SOBRESCRITO
``` 
Assim será exibido:
`COMANDO FIXO CMD SOBRESCRITO`


## Dependêcias entre containers
Em casos onde um container depênde do outro para rodar é recomandado usar o dockerize no entripoint do seu projeto, onde ele vai verificar se o outro container está no ar, se estiver, irá executar o entrypoint real do seu projeto:

```Dockerfile 
entrypoint: dockerize -wait tcp://db:3306 -timeout 20s docker-entrypoint.sh
```
temos outras alternativas ao dockerize:
- wait-for-it: https://github.com/codeedu/docker-wait-for-it 
- healthcheck: https://github.com/devfullcycle/docker-healthcheck

## COMANDOS

Buildar o container
- a tag `-t userdockerhub/tag` define o tag do container
- por último informamos onde está localizado o Dockerfile
```zsh
docker build -t userdockerhub/tag .
```

Buildar o container
- a tag `-it` roda a imagem de forma interativa
- o `bash` abre um terminal no container
```zsh
docker run -it userdockerhub/tag bash
```


Remove todos os container (ativos e inativos)
```zsh
docker rm $(docker ps -a -q) -f
```

Rodar docker com um volume, assim podemos ter uma percistência de dados
```zsh
docker run --rm -it -v $(pwd)/:/usr/src/app -p 3000:3000 node:15 bash
```

Selecionando um Docker file expecifico
```zsh
docker build -t rodolfosouzamenezes/laravel:prod -f Dockerfile.prod
```

Buscar todas as imagens que começam uma palavra:
```zsh
docker images | grep laravel  
```

Nginx
```
docker network create laranet
```

```
docker run -d --network laranet --name laravel rodolfosouzamenezes/laravel:prod 
```

```
docker run -d --network laranet --name nginx-laravel -p 8080:80 rodolfosouzamenezes/nginx-docker:prod
```
