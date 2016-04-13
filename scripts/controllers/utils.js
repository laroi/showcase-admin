define(['../config/config'], function (config) {
    var dates
    dates = function(inDate) {
        var getISODate;
        getISODate = function() {
            var date;
            if (inDate) {
                date = new Date(inDate)
            } else {
                date = new Date()
            }
            return date.toISOString()
        }
        return {
            getISODate: getISODate
        }
    }
    return {
        dates: dates
    }

})
