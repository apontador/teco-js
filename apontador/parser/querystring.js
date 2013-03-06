define(
    function () {
        'use strict';

        var QueryObject = null;

        QueryObject = function (url) {
            QueryObject.parse(url);
        };

        QueryObject.parse = function (url) {

            // http://rubular.com/r/8zBTxrpRwo
            var re = /(\w+)=([\S]+)/,
                urlParts = [],
                params = [],
                paramsIndex = '',
                query = "",
                index = 0,
                key = "",
                value = "",
                queryObject = {},
                findHash = url.split('#');

            this.hash = '';

            // ensure an object without hash
            if (findHash.length > 1) {
                url = findHash[0];
                this.hash = findHash[1];
            }

            if (re.test(url)) {

                urlParts = url.match(re);
                query = urlParts[0];
                params = query.split("&");

                for (index = 0; index < params.length; index++) {

                    paramsIndex = params[index].match(re) || [];

                    if (paramsIndex.length) {
                        key = paramsIndex[1];
                        value = paramsIndex[2];

                        queryObject[key] = value;
                    }
                }
            }

            this.query = queryObject;
        };

        QueryObject.prototype.get = function (name) {
            return QueryObject.query[name];
        };

        QueryObject.prototype.set = function (name, value) {
            QueryObject.query[name] = value;
        };

        QueryObject.prototype.getHash = function () {
            return QueryObject.hash;
        };

        QueryObject.prototype.setHash = function (value) {
            QueryObject.hash = value;
        };

        QueryObject.prototype.toString = function () {
            var str = '', p;
            for (p in QueryObject.query) {
                if (QueryObject.query.hasOwnProperty(p)) {
                    str += str.length ? "&" : "?";
                    str += p + '=' + QueryObject.query[p];
                }
            }

            if (QueryObject.hash !== '') {
                str += '#' + QueryObject.hash;
            }

            return str;
        };

        return QueryObject;
    }
);
