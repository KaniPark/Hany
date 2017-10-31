/************************************************************************************
 * Dyson Pure Hot + Cool Link MQTT Client.
 ************************************************************************************/
'use strict';

/**
 * Module dependencies
 */
const MQTT = require('mqtt');

/**
 * DysonMqttClient Class
 */
class DysonMqttClient {

    constructor (host, port, username, password, model){
        //console.log('hello dyson mqtt client constructors!');
        this._host      = host;
        this._username  = username;
        this._password  = password;
        this._model     = model;

        
    }

    get host () {
        return this._host;
    }

    get userName () {
        return this._username;
    }

    get password () {
        return this._password;
    }

    get client () {

        let _client = MQTT.connect (this._host, {username: this._username, password: this._password});
        
        _client.on('connect', this.onConnect);
        _client.on('reconnect', this.onReconnect);
        _client.on('close', this.onClose);
        _client.on('offline', this.onOffline);
        _client.on('error', this.onError);
        _client.on('message', this.onMessage);
        _client.on('packetsend', this.onPacketSend);
        _client.on('packetreceive', this.onPacketReceive);

        return _client;
    }

    /**
     * @param {string} topic
     * @param {string|Buffer} message
     * @param {IClientPublishOptions} options
     * @param {PacketCallback} callback
     */
    _publish (topic, message, options, callback) {

        let _client = this.client;

        _client.publish(topic, message, options, callback);
        _client.end();
    }

    /**
     * @param {String|Array|Object} topic
     * @param {Object} options
     * @param {Function} callback
     */
    _subscribe (topic, options, callback) {
        
        let _client = this.client;

        _client.subscribe(topic, options, callback);

        return _client;
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

    /**
     * 
     */
    onConnect (connack){
        console.log('onConnect');
    }

    onReconnect (){
        console.log('onReconnect');
    }

    onClose (){
        console.log('onClose');
    }

    onOffline (){
        console.log('onOffline');
    }

    onError (error){
        console.log('onError');
    }

    onMessage (topic, message, packet){
        console.log('onMessage');
    }

    onPacketSend (packet){
        console.log('onPacketSend');
    }

    onPacketReceive (packet){
        console.log('onPacketReceive');
    }

};

module.exports = DysonMqttClient;