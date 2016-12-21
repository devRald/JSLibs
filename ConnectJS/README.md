# ConnectJS
* $$.isConnected()
  * returns true or false if connected to the internet.<br />
  ```js
  if($$.isConnected){
    //put codes here...
  }
  ```
<br />

* $$.connected( function : callback )
  * callback - function to be executed when you are connected to the internet.
  ```js
  $$.connected(function(e){
      //put codes here...
  });
  ```
  <br />
  
* $$.disconnected( function : callback )
  * callback - function to be executed when you are disconnected to the internet.
  ```js
  $$.disconnected(function(e){
      //put codes here...
  });
  ```
  <br />
  
* $$.connected( object : events )
  * **events**
    * onConnect - callback function onConnect.
    * onDisconnect - callback function onDisconnect.
  ```js
  $$.statusChange({
    onConnect:function(){
      //put codes here
    },
    onDisconnect:function(){
      //put codes here
    }
  })
  ```
