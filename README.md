Teco.js
=======

Componentes JavaScript do Apontador

Dependências
------------

* [Node.js & NPM](http://nodejs.org/download/)

Instalação
----------

Em seu terminal, execute*:

```bash
git clone https://github.com/apontador/teco-js.git
cd teco-js
make install
```

\* O comando para instalar as dependências do [jam](http://jamjs.org) ainda é temporário, mas funciona :).

Uso
---

### Inclusão e versionamento

Simplesmente inclua o **teco.js** no seu projeto como um submódulo do git -- o git se encarregará do versionamento. Ex:

```bash
git submodule add https://github.com/apontador/teco-js.git
cd teco-js
make install
```

### Carregamento dos módulos

#### Assíncrono

Para se beneficiar do carregamento assíncrono dos módulos, simplesmente inclua o script do [require.js](http://requirejs.org) em seu código e configure o path para o teco-js. Assim os módulos serão carregados apenas quando necessários. Ex:

```html
<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <!-- carrega o require.js presente no teco -->
    <script type="text/javascript" src="teco-js/jam/require.js"></script>
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

#### Compilação

Se você preferir incluir de uma vez todos os arquivos necssários para carregar o módulo, você pode compilá-lo antes. Ou seja, o jam.js irá minificar e agrupar todas as dependências em um arquivo. O uso, porém, continua o mesmo. Ex:

Compilação:

```bash
cd teco-js
./bin/jam compile --almond -i apontador/tracker/gm -o gm.js
```

Uso do arquivo compilado:

```html
<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <!-- carrega o arquivo compilado -->
    <script type="text/javascript" src="gm.js"></script>
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
