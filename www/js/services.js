angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Mercato', ['$http', function($http) {
  // Might use a resource here that returns a JSON array

    var posts;
    var mercato = $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent("http://mercato365.feedsportal.com/c/355/f/599991/index.rss"));

        mercato.then(function(res){
            posts = res.data.responseData.feed.entries;
        });

        return {
            parseFeed : function(){
                return posts;
            },
            get: function() {
                return posts;
            }
        }
}]);