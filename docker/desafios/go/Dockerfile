FROM golang:1.16-alpine AS builder

WORKDIR /usr/src/app

COPY main.go ./

RUN go build main.go

FROM scratch

COPY --from=builder /usr/src/app/main ./

ENTRYPOINT [ "./main" ]
