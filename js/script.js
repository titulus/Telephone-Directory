// require('nw.gui').Window.get().showDevTools(); //show console at start
require('nw.gui').Window.get().maximize(); //maximize windows on start

var credentials = require('./private.js'); //config include domain user and pass

var ActiveDirectory = require('activedirectory');
var ad = new ActiveDirectory(credentials.dn, credentials.dc, credentials.user, credentials.pass, {attributes: {user: [ 'cn', 'telephonenumber', 'mail', 'department']}});

var groupName = 'Employees';  // that how i call group with all real persons
ad.getUsersForGroup(groupName, function(err, users) {
  if (err) {
    console.log('ERROR: ' +JSON.stringify(err));
    return;
  }

  if (! users) console.log('Group: ' + groupName + ' not found.');
  else {
    // console.log(users);
    users2table(users);
    // sorter.init();
  }
});

function users2table (users) {
	tablehtml = '';
	for (i in users) {
		var user = users[i];
		console.log(user);
		tablehtml+='<tr>';
		tablehtml+=	'<td>'+user.cn+'</td>'
		tablehtml+=	'<td>'+user.telephoneNumber+'</td>'
		tablehtml+=	'<td>'+user.mail+'</td>'
		tablehtml+=	'<td>'+user.department+'</td>'
		tablehtml+='</tr>'
	}
	// console.log(tablehtml);
	$('#table tbody').html(tablehtml);
	sorter.init();
	$('#query').focus();
}