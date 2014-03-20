var vertx = require('vertx');

var httpServer = vertx.createHttpServer();
httpServer.requestHandler(function (req) {
  if(req.uri() == "/vertxbus.js") {
    req.response.sendFile("vertxbus.js")
  } else {
    req.response.sendFile("index.html");
  }
});

var sockServer = vertx.createSockJSServer(httpServer)
sockServer.bridge({prefix: '/eventbus'}, [{}], [{}]);
httpServer.listen(8080);
