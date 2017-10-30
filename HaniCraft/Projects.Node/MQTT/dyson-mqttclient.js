/************************************************************************************
 * Dyson Pure Hot + Cool Link MQTT Client.
 ************************************************************************************/
class DysonMqttClient {

    constructor (host, port, userid, password){
        //console.log('hello dyson mqtt client constructors!');
        this._host      = host;
        this._port      = port;
        this._userid    = userid;
        this._password  = password;
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
        console.log('Connected to ' + this._host + ':' + this._port);
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