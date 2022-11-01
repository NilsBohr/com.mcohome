'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

class MicroSwitch extends ZwaveDevice {

  onMeshInit() {
    // enable debugging
    // this.enableDebug();

    // print the node's info to the console
    // this.printNode();

    // register capabilities for this device
    this.registerCapability('onoff', 'BASIC');
  }

}

module.exports = MicroSwitch;
