(function(global, conn) {
    "use strict";

    if (global.document) {
        conn(global)
    } else {
        return;
    }

})(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
    var document = window.document;
    var version = "1.0.0",
        ConnectJS = function() {
        	console.log("ConnectJS Initialized")
        };

    ConnectJS.fn = ConnectJS.prototype = {
        connectjs: version
    }

    ConnectJS.extend = ConnectJS.fn.extend = function(){
    		var name;
    		var target = arguments[0];
				ConnectJS = target;

    		return ConnectJS;
    }

    ConnectJS.extend({
    		connected:function(callback){
    			window.addEventListener('online',callback);
    		},
    		disconnected:function(callback){
    			window.addEventListener('offline',callback);
    		},
    		statusChange:function(obj){
				  window.addEventListener('online',obj.onConnect);
				  window.addEventListener('offline',obj.onDisconnect);
				},
    		isConnected:function(){
    			return navigator.onLine;
    		}
    });

    var _ConnectJS = window.ConnectJS,
        _$$ = window.$$;

    ConnectJS.noConflict = function() {
        if (window.$$ === jQuery) {
            window.$$ = _$$;
        }

        if (window.jQuery === jQuery) {
            window.ConnectJS = _ConnectJS;
        }

        return ConnectJS;
    };

    if (!noGlobal) {
        window.ConnectJS = window.$$ = ConnectJS;
    }

    return ConnectJS;
});
