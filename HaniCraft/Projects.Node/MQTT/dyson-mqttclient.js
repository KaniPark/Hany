/************************************************************************************
 * Dyson Pure Hot + Cool Link MQTT Client.
 ************************************************************************************/
"use strict"

 class DysonMqttClient {

    constructor (host, port, userid, password){
        //console.log('hello dyson mqtt client constructors!');
        this._host      = host;
        this._port      = port;
        this._userid    = userid;
        this._password  = password;
        this._mqtt      = require('mqtt');
    }

    get Host (){
        return this._host;
    }

    get Port (){
        return this._port;
    }

    get UserId (){
        return this._userid;
    }

    get Password (){
        return this._password;
    }

    Connect (){
        //console.log('Connected to ' + this._host + ':' + this._port);

        let _client = this._mqtt.connect(this._host, {username: this._userid, password: this._password});
        let _topic = '455/' + this._userid + '/#';

        _client.subscribe(_topic);

        _client.on('message', function(topic, message){
            console.log(topic + ' : ' + message + '\n');
        });
    }

    ChangeFanSpeed (speed){
        console.log('Change fan speed to' + speed);
    }

    NightModeOn(){
        console.log('Night mode on');
    }

    NightModeOff(){
        console.log('Night mode off');
    }

};

module.exports = DysonMqttClient;