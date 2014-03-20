import vertx
from core.event_bus import EventBus

def timer_handler(timer_id):
    EventBus.publish('examples.message', 'Message from Jython')

vertx.set_periodic(1000, timer_handler)
