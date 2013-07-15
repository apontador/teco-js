[![Stories in Ready](http://badge.waffle.io/apontador/teco-js.png)](http://waffle.io/apontador/teco-js)  
Teco.js [![Build Status](https://secure.travis-ci.org/apontador/teco-js.png?branch=master)](http://travis-ci.org/apontador/teco-js)
=======

Componentes JavaScript do Apontador

DependC*ncias
------------

* [Node.js & NPM](http://nodejs.org/download/)

InstalaC'C#o (dev)
----------------

Em seu terminal, execute:

```bash
npm install -g bower grunt-cli
git clone https://github.com/apontador/teco-js.git
cd teco-js
grunt install --dev
```

Uso
---

Para comeC'ar a utilizar *teco* em seu projeto, sC3 sC#o necessC!rios trC*s passos:

### 1. Importar

A forma mais fC!cil de importar o *teco* e manter o controle da versC#o C) atravC)s dos submC3dulos do git. Para isso, execute:

```
git submodule add git@github.com:apontador/teco-js.git teco-js
```

### 2. Definir biblioteca AMD

O teco.js C) desenvolvido de forma modular utilizando [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD). Sendo assim, se faz necessC!rio incluir no seu projeto uma biblioteca para carregar estes mC3dulos. Existem [vC!rias opC'C5es disponC-veis](http://requirejs.org/docs/whyamd.html#youcando), sendo [require.js](http://requirejs.org/) a mais popular.

### 3. Carregar os mC3dulos

Se vocC* escolheu uma biblioteca de carregamento assC-ncrono, como *require.js*, pode servir os mC3dulos do teco.js diretamente a partir do diretC3rio de arquivos estC!ticos do seu projeto. Ex:

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
        require(["apontador/tracker/gm"], function(gmTraker) { // faz requisiC'C#o para o mC3dulo
            console.log(gmTraker); // utiliza o mC3dulo
        });
    </script>
</head>
<body>
</body>
</html>
```

Caso vocC* tenha optado por uma biblioteca como *almond* para o carregamento de uma versC#o jC! compilada vocC* precisarC! otimizar seu projeto usando r.js. Ex:

```bash
r.js -o build.js
```

[Exemplo de build file](http://requirejs.org/docs/optimization.html#wholeproject)
[Build file do Apontador](https://github.com/apontador/teco-js/blob/master/examples/build.js)

```html
<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <script type="text/javascript" src="almond.js"></script>

    <!-- carrega o arquivo compilado -->
    <script type="text/javascript" src="teco.js"></script>
    <script type="text/javascript">
        require(["apontador/tracker/gm"], function(gmTraker) { // apenas importa o mC3dulo,
                                                               // visto que ele jC! foi carregado
            console.log(gmTraker); // utiliza o mC3dulo
        });
    </script>
</head>
<body>
</body>
</html>
```
