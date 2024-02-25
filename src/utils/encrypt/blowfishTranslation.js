//Blowfish = require('egoroof-blowfish');
import Blowfish from 'egoroof-blowfish';
//const dotenv = require('dotenv').config();
//import { axeptaUser } from '../../config/axepta-config.js';

class BlowfishTranslation {
  
  constructor(string){
    // Import Blowfish libary and set it up
      this.bf = new Blowfish(axeptaUser.blowfishPassword, Blowfish.MODE.ECB, Blowfish.PADDING.NULL);
    // Make sure that string length is always 8 bit
    this.bf.setIv('00000000');
    this.string = string
  }

  encryptBlowfish() {
      // Encode string
      const encoded = this.bf.encode(this.string);
      // Convert Uint8Array to Hex
      let hex = Buffer.from(encoded).toString('hex').toUpperCase();
      return hex;
  }


  decryptBlowfish() {
    // Turn Hex into Uint8Array
    const hex = Uint8Array.from(Buffer.from(this.string, 'hex'));
    // Decode
    const decoded = this.bf.decode(hex, Blowfish.TYPE.STRING); 
    return decoded;
  }
}

module.exports = BlowfishTranslation;