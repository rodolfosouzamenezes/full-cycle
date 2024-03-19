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