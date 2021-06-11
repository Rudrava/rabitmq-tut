# RABITMQ TUT
**A messaging queue service: was too excited to learn this, scratched the surface (11/06/2021)**

# TO RUN THE CODE

`docker run --name rabitmq -p <PORT YOU WANNA HOST ON>:5672 rabitmq`

`git clone git@github.com:Rudrava/rabitmq-tut.git`

`yarn install`

`yarn pub "message for the queue"`

`yarn sub`

**NOTE: the subscriber is a continous listener stop the service using `ctrl+z`**

# CREDITS

- [youtube vid](https://www.youtube.com/watch?v=Cie5v59mrTg)
- [channel](https://www.youtube.com/channel/UC_ML5xP23TOWKUcc-oAE_Eg)
- [RABIT MQ DOCS](https://www.rabbitmq.com/documentation.html)
- [docker official rabitmq image](https://hub.docker.com/_/rabbitmq/)
