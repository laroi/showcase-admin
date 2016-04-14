define([], function () {
    var config = {
            couchdb:{
                protocol:'http',
                host: window.location.host,
                port: 80,
                proxy: 'data',
                url: function (){
                   return this.protocol + '://' + this.host + ':' + this.port + '/' + this.proxy +'/textiles/'
                }
            },
            api : {
                protocol:'http',
                host: 'localhost',
                port: 80,
                proxy: 'api/v1',
                url: function (){
                   return this.protocol + '://' + this.host + ':' + this.port + '/' + this.proxy + '/';
                }
            }
        }
        
        return config;
    
});
