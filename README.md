Teco.js
=======

Componentes JavaScript do Apontador

Dependências
------------

* [Node.js & NPM](http://nodejs.org/download/)

Instalação (dev)
----------------

Em seu terminal, execute:

```bash
git clone https://github.com/apontador/teco-js.git
cd teco-js
make install
```

Uso
---

Para começar a utilizar *teco* em seu projeto, só são necessários três passos:

### 1. Importar

A forma mais fácil de importar o *teco* e manter o controle da versão é através dos submódulos do git. Para isso, execute:

```
git submodule add git@github.com:apontador/teco-js.git teco-js
```

### 2. Definir biblioteca AMD

O teco.js é desenvolvido de forma modular utilizando [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD). Sendo assim, se faz necessário incluir no seu projeto uma biblioteca para carregar estes módulos. Existem [várias opções disponíveis](http://requirejs.org/docs/whyamd.html#youcando), sendo [require.js](http://requirejs.org/) a mais popular.

### 3. Carregar os módulos

Se você escolheu uma biblioteca de carregamento assíncrono, como *require.js*, pode servir os módulos do teco.js diretamente a partir do diretório de arquivos estáticos do seu projeto. Ex:

```html
<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <!-- carrega o require.js -->
    <script type="text/javascript" src="require.js"></script>
    <script type="text/javascript">
        require.config({
            "baseUrl": "teco-js" // define o caminho relativo para o teco
        });
        require(["apontador/tracker/gm"], function(gmTraker) { // faz requisição para o módulo
            console.log(gmTraker); // utiliza o módulo
        });
    </script>
</head>
<body>
</body>
</html>
```

Caso você tenha optado por uma biblioteca como *almond* para o carregamento de uma versão já compilada você precisará otimizar o projeto usando r.js. Ex:

```bash
make build
```

**obs:** copie o conteúdo da pasta [examples](examples) para seu projeto e altere de acordo com suas necessidades.

```html
<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <script type="text/javascript" src="almond.js"></script>

    <!-- carrega o arquivo compilado -->
    <script type="text/javascript" src="teco.js"></script>
    <script type="text/javascript">
        require(["apontador/tracker/gm"], function(gmTraker) { // apenas importa o módulo,
                                                               // visto que ele já foi carregado
            console.log(gmTraker); // utiliza o módulo
        });
    </script>
</head>
<body>
</body>
</html>
```
