require('nw.gui').Window.get().showDevTools(); //show console at start

var credentials = require('./private.js'); //config include domain user and pass

var ActiveDirectory = require('activedirectory');
var ad = new ActiveDirectory(credentials.dn, credentials.dc, credentials.user, credentials.pass);

