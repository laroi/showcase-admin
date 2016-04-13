define(['../config/config'], function (config) {
    var callView,
        get,
        post,
        put;
    callView = function (options, callback) {
        var view_name = options.view_name,
            start_key = options.start_key
            end_key = options.end_key,
            reduce = options.reduce,
            group = options.group,
            group_level = options.group_level,
            url = '';
            console.log(options)
        url = config.couchdb.url() + view_name;
        if (start_key || end_key || group || reduce) {
            url += '?'
            if (start_key) {
                url += 'startKey='+start_key
            }
            if (end_key) {
                url += 'endKey='+end_key
            }
             if (group && group_level) {
                url += 'group=true && group_level='+group_level
            }
            if (reduce ) {
                url += 'reduce=false'
            }
        }
        console.log(url);
        $.ajax({
            url: url, 
            method: 'GET',
            dataType: 'JSON',
            success: function (data){
                callback(undefined, data);
            },
            error: function(xhr, status, err) {
                callback(err, undefined);
            }
        }); 
    };
    get = function (url, callback) {
        $.ajax({
            url: url, 
            method: 'GET',
            dataType: "json",
            success: function (data){
                callback(undefined, data);
            },
            error: function(xhr, status, err) {
                callback(JSON.parse(xhr.responseText), undefined);
            }
        }); 
    }
    post = function (url, postdata, callback) {
        $.ajax({
            url: url, 
            method: 'POST',
            data: JSON.stringify(postdata),
            dataType: "json",
            contentType: "application/json",
            success: function (data){
                callback(undefined, data);
            },
            error: function(xhr, status, err) {
                callback(JSON.parse(xhr.responseText), undefined);
            }
        }); 
    }
    put = function (url, postdata, callback) {
    console.log(postdata)
        $.ajax({
            url: url, 
            dataType:'JSON',
            method: 'PUT',
            data: postdata,
            contentType:'application/json',
            success: function (data){
                callback(undefined, data);
            },
            error: function(xhr, status, err) {
                callback(JSON.parse(xhr.responseText), undefined);
            }
        }); 
    }
    return {
        callView: callView,
        get: get,
        post: post,
        put: put
    }

})
