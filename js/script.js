// require('nw.gui').Window.get().showDevTools(); //show console at start
require('nw.gui').Window.get().maximize(); //maximize windows on start

var credentials = require('./private.js'); //config include domain user and pass

var ActiveDirectory = require('activedirectory');  // Active Directory module
var ad = new ActiveDirectory(credentials.dn, credentials.dc, credentials.user, credentials.pass, {attributes: {user: [ 'cn', 'mail', 'department', 'title', 'telephonenumber', 'otherTelephone', 'mobile', 'otherMobile', 'homePhone', 'facsimileTelephoneNumber']}});

var groupName = 'Employees';  // that how i call group with all real persons
ad.getUsersForGroup(groupName, function(err, users) {
  if (err) {
    console.log('ERROR: ' +JSON.stringify(err));
    return;
  }

  if (! users) console.log('Group: ' + groupName + ' not found.');
  else {
  	var localusers = localStorage.users;
  	var ldapusers = JSON.stringify(users);
  	// console.log(users);
    if (localusers != ldapusers) {
    	localStorage.users = JSON.stringify(users);
    	console.info('users changed');
    	users2table(JSON.parse(localStorage.users));
    } else {console.log('users didn\'t changed')};
    
    // users2table(users)
  }
});

if (localStorage.users) users2table(JSON.parse(localStorage.users));
function users2table (users) {
	tablehtml = '';
	for (i=0; i<users.length;i++) {
		var user = users[i];
		// console.log(user);
		tablehtml+='<tr>';
		tablehtml+=	'<td>'+user.cn+'</td>';
		tablehtml+=	'<td>';
			if (user.telephoneNumber) tablehtml+='<span class="phone"><span class="icon"><i class="fa fa-phone"></i></span>'+user.telephoneNumber+'</span>';
			if (user.otherTelephone) {
				// console.log(typeof user.otherTelephone,user.otherTelephone)
				if (typeof user.otherTelephone == "string") {
					tablehtml+='<br/>'+'<span class="icon"><i class="fa fa-phone"></i></span>'+user.otherTelephone;
				} else {
					for (otherTelephone in user.otherTelephone) tablehtml+='<br/>'+'<span class="icon"><i class="fa fa-phone"></i></span>'+user.otherTelephone[otherTelephone];
				}
			}
			if (user.mobile) tablehtml+='<br/>'+'<span class="icon"><i class="fa fa-mobile fa-lg"></i></span>'+user.mobile;
			if (user.otherMobile) {
				// console.log(typeof user.otherMobile,user.otherMobile)
				if (typeof user.otherMobile == "string") {
					tablehtml+='<br/>'+'<span class="icon"><i class="fa fa-mobile fa-lg"></i></span>'+user.otherMobile;
				} else {
					for (otherMobile in user.otherMobile) tablehtml+='<br/>'+'<span class="icon"><i class="fa fa-mobile fa-lg"></i></span>'+user.otherMobile[otherMobile];
				}
			}
			if (user.homePhone) tablehtml+='<br/>'+'<span class="icon"><i class="fa fa-home fa-lg"></i></span>'+user.homePhone;
			if (user.facsimileTelephoneNumber) tablehtml+='<br/>'+'<span class="icon"><i class="fa fa-fax"></i></span>'+user.facsimileTelephoneNumber;

		tablehtml+= '</td>';
		tablehtml+=	'<td>'+((user.mail)?'<a href="mailto:'+user.mail+'">'+user.mail+'</a>':'')+'</td>';
		tablehtml+=	'<td>'+((user.department)?user.department:'')+((user.title)?('</br>'+user.title):'')+'</td>';
		tablehtml+='</tr>';
	}
	// console.log(tablehtml);
	$('#table tbody').html(tablehtml);
	sorter.init();
	$('#query').focus();
}

$(document).ready(function () {

	var prevquery=''; // Previous query for searching in table
	$('#query').on('keyup',function () {
		if (prevquery!=this.value) {
			sorter.reset();
			sorter.search('query');
			prevquery=this.value;
		}
	});

	$('#print').on('click',function() {
		window.print();
	})
	
	$('#table').stickyTableHeaders({fixedOffset: $('#menu')}); // initiate stiky mode for table header
});
