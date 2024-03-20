## Tipos de NETWORK
__Bridge:__ é a rede padrão do Docker quando nehum tipo de rede é especificado

__Host:__ os conteiners compartilham a mesma interface de rede do host, sem a necessidade da redirecionamento da porta

__Overlay:__ é uma rede distribuída que permite comunicação em diferentes hosts, útil em ambientes de orquestação de containers (Kubernetes e Docker Swarm)

__Macvlan:__ permite que os conteiners possuam seus próprios endereços MAC e IP na rede de host

__None:__ o contêiner não possui conectividade externa

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