//const dotenv = require('dotenv').config();

import { axeptaUser } from '../../config/axepta-config.js';

class MACGeneration {

    constructor(string) {
        this.text = string;
    }

    generateMAC() {
        // Our key
        const key = axeptaUser.hmacPassword
        // Using node's crypto to generate and return hash
        const hash = require("crypto")
            .createHmac('sha256', key)
            .update(this.text)
            .digest('hex');
        return hash.toUpperCase();
    }
}

module.exports = MACGeneration;