'use strict';

angular.module('Blog')
    .constant("baseURL","http://localhost:3000/")
    .service('userService', ['$resource', 'baseURL', function($resource,baseURL) {
        this.user  = function(){
            return $resource(baseURL+"users/:id",null,
                {'save':
                    {
                        method:'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    },
                 'update':{
                     method:'PUT',
                     headers: {
                         'Content-Type': 'application/json'
                     }
                 }
                });
        };
    }]);
