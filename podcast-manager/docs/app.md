# Podcast Manager


### Descrição
um app ao estilo netflix, aonde possa centralizar diferentes episódio podcasts separados por categoria

### Domínio
Podcasts feitos em vídeo

### Features
- Listar os espisódios podcasts em sessões de categorias
    -[saúde, fitness, mentalidade, humor]
- Filtrar episódios por nome de podcast

## Como

### Feature
- Listar os espisódios podcasts em sessões de categorias

### Como vou implementar
GET: retorna lista de episódios

response:

    ```js
    {
        podcastName: "flow";
        episode:"CBUM - Flow #319";
        videoId:5DaLlqP-8uI ; 
        cover:"https://i.ytimg.com/vi/5DaLlqP-8uI/maxresdefault.jpg";
        link:"https://www.youtube.com/watch?v=5DaLlqP-8uI";
        categories:["saúde","esporte","bodybuilder"]

    }
    ```


GET: retorna lista de episódios baseado em um parâmetro enviado pelo client do nome do podcast