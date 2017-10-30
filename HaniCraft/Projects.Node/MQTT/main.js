
/*
 * Reference sites 
 * - http://genoworks.jp/homehacks/40 
 * - https://www.npmjs.com/package/homebridge-dyson-fan
 */

var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', function(){
    client.subscribe('presence');
    client.publish('presence', 'hello mqtt');
});

client.on('message', function(topic, message){
    console.log(message.toString());
    client.end();
});

