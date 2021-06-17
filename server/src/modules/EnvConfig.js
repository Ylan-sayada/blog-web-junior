"use strict";
let dotenv = require('dotenv').config();
class InitEnv {
    constructor(){
        this.port  = process.env.NODE_PORT;
        this.environment = process.env.NODE_ENV;
        this.db = process.env.DB_NAME;
    }
    getPort = () => {
        return this.port;
    }
    getEnv= () => {
        return this.environment;
    }
    getDb= () => {
        return this.db;
    }
    start(){
        if(this.environment === 'development'){
            console.log(`mode : ${this.environment} \tport : ${this.port} \tdatabase: ${this.db}`);
        }
    }
}
module.exports = new InitEnv;