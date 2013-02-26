define(
    function () {
        'use strict';

        var query = null,
            QueryObject = null;

        QueryObject = function (url) {
            QueryObject.parse(url);
        };

        QueryObject.parse = function (url) {
            // http://rubular.com/r/8zBTxrpRwo
            var re = /(\w+)=([\S]+)/,
                urlParts = [],
                params = [],
                query = "",
                index = 0,
                chave = "",
                valor = "",
                queryObject = {};

            if (re.test(url)) {
                urlParts = url.match(re);
                query = urlParts[0];
                params = query.split("&");

                for (index = 0; index < params.length; index++) {
                    chave = params[index].match(re)[1];
                    valor = params[index].match(re)[2];

                    queryObject[chave] = valor;
                }
                QueryObject.query = queryObject;
            }
        };

        QueryObject.prototype.get = function (name) {
            return QueryObject.query[name];
        };

        QueryObject.prototype.set = function (name, value) {
            QueryObject.query[name] = value;
        };

        QueryObject.prototype.toString = function () {
            var str = '', p;
            for (p in QueryObject.query) {
                if (QueryObject.query.hasOwnProperty(p)) {
                    str += str.length ? "&" : "?";
                    str += p + '=' + QueryObject.query[p];
                }
            }
            return str;
        };

        return QueryObject;
    }
);
