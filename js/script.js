require('nw.gui').Window.get().showDevTools(); //show console at start

var credentials = require('./private.js'); //config include domain user and pass

var ActiveDirectory = require('activedirectory');
var ad = new ActiveDirectory(credentials.dn, credentials.dc, credentials.user, credentials.pass);

var groupName = 'Employees';  // that how i call group with all real persons
ad.getUsersForGroup(groupName, function(err, users) {
  if (err) {
    console.log('ERROR: ' +JSON.stringify(err));
    return;
  }

  if (! users) console.log('Group: ' + groupName + ' not found.');
  else {
    console.log(users);
    sorter.init();
  }
});