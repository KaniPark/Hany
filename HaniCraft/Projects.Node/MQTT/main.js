
/*
 * Reference sites 
 * - http://genoworks.jp/homehacks/40 
 * - http://aakira.hatenablog.com/entry/2016/08/12/012654
 * - https://www.npmjs.com/package/homebridge-dyson-fan
 * - https://www.joinc.co.kr/w/man/12/MQTT/Rest
 */
const   DysonMqttClient     = require('./dyson-mqttclient'),
        Host                = '10.247.200.1',
        Port                = 1883,
        UserId              = 'userId',
        Password            = 'password';


let _dysonMqttClient        = new DysonMqttClient(Host, Port, UserId, Password);

_dysonMqttClient.Connect();

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
