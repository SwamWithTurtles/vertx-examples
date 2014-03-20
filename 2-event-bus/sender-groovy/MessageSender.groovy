def eb = vertx.eventBus

println "Loaded"

vertx.setPeriodic(1000) {
  eb.publish("examples.message", "Message from Groovy")
}
