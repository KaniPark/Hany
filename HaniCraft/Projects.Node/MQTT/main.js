
/*
 * Reference sites 
 * - http://genoworks.jp/homehacks/40 
 * - http://aakira.hatenablog.com/entry/2016/08/12/012654
 * - https://www.npmjs.com/package/homebridge-dyson-fan
 * - https://www.joinc.co.kr/w/man/12/MQTT/Rest
 */
"use strict"

const   DysonMqttClient     = require('./dyson-mqttclient'),
        Host                = 'mqtt://192.168.0.38:1883',
        UserId              = '',
        Password            = '',
        Model               = '455';


let _dysonMqttClient        = new DysonMqttClient(Host, UserId, Password, Model);

_dysonMqttClient.publish();

//console.log(_dysonMqttClient.client);
//_dysonMqttClient.Connect();

/*
var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', function(){
    client.subscribe('presence');
    client.publish('presence', 'hello mqtt');
});

client.on('message', function(topic, message){
    console.log(message.toString());
    client.end();
});
*/
